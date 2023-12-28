from openai import OpenAI
# import os
# from dotenv import load_dotenv

def lambda_handler(event, context):
  # load_dotenv('./.env')
  # client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
  client = OpenAI()
  context = event['context']
  
  response = client.chat.completions.create(
    model="gpt-3.5-turbo-1106",
    response_format={ "type": "json_object" },
    messages=[
      {"role": "system", "content": "Form a formal question based solely on the information in user content. Add multiple choice answers. Return in JSON with keys: question, a, b, c, d, and correctAnswerChoice"},
      {"role": "user", "content": context}
    ]
  )
  
  return {
    'statusCode': 200,
    'body': response.choices[0].message.content
  }