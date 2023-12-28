# from newspaper import Article
from bs4 import BeautifulSoup
# from transformers import pipeline
# from summarizer import Summarizer
from summa.summarizer import summarize

# summarizer = Summarizer()
# summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

def lambda_handler(event, context):
    html_doc = event['html_doc']
    soup = BeautifulSoup(html_doc, "html.parser")
    text = soup.get_text()
    summarized_text = summarize(text, ratio=0.2)
    # summarized_text = summarizer(text, num_sentences=3, max_length=150)
    # summarized_text = summarizer(text, max_length=100, min_length=5, do_sample=False)
    return {
        "statusCode": 200, 
        "body": summarized_text
    }