from cassandra.cluster import Cluster
from cassandra.auth import PlainTextAuthProvider
from cassandra.query import BatchStatement
from openai import OpenAI

# import cassio

import os
from dotenv import load_dotenv

load_dotenv("./.env")

ASTRA_DB_APPLICATION_TOKEN = os.getenv("ASTRA_DB_APPLICATION_TOKEN")
# ASTRA_DB_ID = os.getenv("ASTRA_DB_ID")
ASTRA_DB_SECURE_BUNDLE_PATH = os.getenv("ASTRA_DB_SECURE_BUNDLE_PATH")
ASTRA_DB_KEYSPACE = os.getenv("ASTRA_DB_KEYSPACE")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# cassio.init(token=ASTRA_DB_APPLICATION_TOKEN, database_id=ASTRA_DB_ID)

cluster = Cluster(
    cloud={
        "secure_connect_bundle": ASTRA_DB_SECURE_BUNDLE_PATH,
    },
    auth_provider=PlainTextAuthProvider(
        "token",
        ASTRA_DB_APPLICATION_TOKEN,
    ),
)

session = cluster.connect()

client = OpenAI(api_key=OPENAI_API_KEY)

# drop_tables_query = f"""
# DROP TABLE IF EXISTS {ASTRA_DB_KEYSPACE}.urls;
# """
# session.execute(drop_tables_query)

# create_url_table_query = f"""
# CREATE TABLE IF NOT EXISTS {ASTRA_DB_KEYSPACE}.urls (
#     url TEXT PRIMARY KEY,
#     url_id UUID,
#     timestamp TIMESTAMP
# );
# """
# session.execute(create_url_table_query)
# create_sentences_table_query = f"""
# CREATE TABLE IF NOT EXISTS {ASTRA_DB_KEYSPACE}.sentences (
#     url_id UUID,
#     sentence_text TEXT,
#     sentence_vector vector<float, 1536>,
#     PRIMARY KEY (url_id, sentence_text)
# );
# """
# session.execute(create_sentences_table_query)

# custom_index_query = f"""
# CREATE CUSTOM INDEX IF NOT EXISTS ann_index
# ON {ASTRA_DB_KEYSPACE}.sentences(sentence_vector) USING 'StorageAttachedIndex';
# """
# session.execute(custom_index_query)

# create_timestamp_index_query = f"""
# CREATE CUSTOM INDEX IF NOT EXISTS url_timestamp_index ON {ASTRA_DB_KEYSPACE}.urls (timestamp) USING 'StorageAttachedIndex';
# """
# session.execute(create_timestamp_index_query)

truncate_url_table_query = f"""
TRUNCATE {ASTRA_DB_KEYSPACE}.urls;
"""
truncate_sentences_table_query = f"""
TRUNCATE {ASTRA_DB_KEYSPACE}.sentences;
"""
session.execute(truncate_url_table_query)
session.execute(truncate_sentences_table_query)


def lambda_handler(event, context):
    url = event["url"]
    website_text = event["websiteText"]
    query_text = event["queryText"]

    # check if url exists in urls table
    check_exists_query = f"""
    SELECT url_id FROM {ASTRA_DB_KEYSPACE}.urls 
    WHERE url = '{url}' 
    LIMIT 1;
    """
    url_id_rows = session.execute(check_exists_query)
    url_id = url_id_rows.one().url_id if url_id_rows else None
    if not url_id_rows:
        # count urls to make sure there is room
        count_query = f"SELECT COUNT(*) FROM {ASTRA_DB_KEYSPACE}.urls;"
        count = session.execute(count_query).one().count
        print(count)
        if count >= 5:
            # Code to remove the earliest url
            # earliest_url_query = f"SELECT url_id FROM {ASTRA_DB_KEYSPACE}.urls WHERE url != '' ORDER BY timestamp ASC LIMIT 1;"
            # earliest_url_result = session.execute(earliest_url_query)
            # earliest_url_id = earliest_url_result.one().url_id
            # delete_earliest_url_query = f"DELETE FROM {ASTRA_DB_KEYSPACE}.urls WHERE url_id = {earliest_url_id};"
            # session.execute(delete_earliest_url_query)
            # delete_sentences_query = f"DELETE FROM {ASTRA_DB_KEYSPACE}.sentences WHERE url_id = {earliest_url_id};"
            # session.execute(delete_sentences_query)
            
            # just truncate the tables
            truncate_url_table_query = f"""
            TRUNCATE {ASTRA_DB_KEYSPACE}.urls;
            """
            truncate_sentences_table_query = f"""
            TRUNCATE {ASTRA_DB_KEYSPACE}.sentences;
            """
            session.execute(truncate_url_table_query)
            session.execute(truncate_sentences_table_query)
            print("e")
        
        # insert url into urls table
        insert_url_query = f"""
        INSERT INTO {ASTRA_DB_KEYSPACE}.urls (url, url_id, timestamp) VALUES ('{url}', uuid(), toTimestamp(now()));
        """
        session.execute(insert_url_query)

        # get url_id from urls table
        get_url_id_query = f"""
        SELECT url_id FROM {ASTRA_DB_KEYSPACE}.urls WHERE url = '{url}' LIMIT 1;
        """
        get_url_id_result = session.execute(get_url_id_query)
        url_id = get_url_id_result.one().url_id
        
        # get sentences from text
        sentences = get_sentences(website_text)

        # create embeddings
        openai_embeddings_output = client.embeddings.create(
            input=sentences,
            model="text-embedding-ada-002"
        ).data
        
        # embeddings = [None] * len(openai_embeddings_output)
        # for output in openai_embeddings_output:
        #     embeddings[openai_embeddings_output.index(output)] = output.embedding
        embeddings = [output.embedding for output in openai_embeddings_output]

        # insert sentences into sentences table
        prepared_statement = session.prepare(
            f"""
            INSERT INTO {ASTRA_DB_KEYSPACE}.sentences (url_id, sentence_text, sentence_vector) VALUES (?, ?, ?);
            """
        )

        batch = BatchStatement()

        for sentence, embedding in zip(sentences, embeddings):
            batch.add(
                prepared_statement, (url_id, sentence, embedding)
            )
            # session.execute(f"INSERT INTO {ASTRA_DB_KEYSPACE}.sentences (url_id, sentence_text, sentence_vector) VALUES ({url_id}, '{sentence}', {embedding});")
            # print("e")
        try:
            session.execute(batch)
        except Exception as e:
            return {"statusCode": 500, "body": "Internal Server Error"}

    # embed query_text
    embedding = client.embeddings.create(
        input=query_text,
        model="text-embedding-ada-002"
    ).data[0].embedding
    
    # count_query = f"SELECT COUNT(*) FROM {ASTRA_DB_KEYSPACE}.sentences;"
    # print(session.execute(count_query).one().count)
    
    # search vector database for sentences similar to text
    search_vector_query = f"""
    SELECT sentence_text, similarity_cosine(sentence_vector, {embedding}) FROM {ASTRA_DB_KEYSPACE}.sentences 
    WHERE url_id = {url_id}
    ORDER BY sentence_vector ANN OF {embedding}
    LIMIT 1;
    """
    search_vector_result = session.execute(search_vector_query)
    if not search_vector_result:
        return {"statusCode": 500, "body": "Internal Server Error"}
    sentence_text = search_vector_result.one().sentence_text
    
    # print([row.sentence_text for row in search_vector_result.all()])
    
    return {"statusCode": 200, "body": sentence_text}

def get_sentences(text: str):
    sentences = text.split(".")
    new_sentences = []
    for i, sentence in enumerate(sentences):
        sentences[i] = sentence.strip()
        if len(sentence) > 500:
            new_sentences.append(sentence[:500])
            sentences[i] = sentence[500:]
    sentences.extend(new_sentences)
    # if len(sentences) > 2048:
    #     sentences = sentences[:2048]
    return sentences

# url = "foiawejfioewja"
# website_text = """
# A study using Creyos (formerly Cambridge Brain Sciences) cognitive tasks has provided new insight into the biological basis of intelligence. Sleep spindles—short neural oscillations that occur during non-rapid eye movement sleep—have previously been linked to IQ test performance. However, there were a few unanswered questions:

# Sleep spindles are also linked with sleep quality, because they protect sleep from external stimuli. Are they only linked with IQ because people who are well-rested tend to do better on cognitive tests?
# As we’ve discussed before, intelligence is not just one thing. If sleep spindles are directly linked with overall intelligence, then which facet, specifically, are they linked with?
# """
# query_text = "what helps with sleep quality"
# print(lambda_handler({"url": url, "websiteText": website_text, "queryText": query_text}, None)['body'])