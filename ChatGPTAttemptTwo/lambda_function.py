from openai import OpenAI
import os
# from dotenv import load_dotenv

def lambda_handler(event, context):
  # load_dotenv('./.env')
  client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

  context = event['context']

  response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
      {"role": "system", "content": "Create a multiple choice question based on user input in a JSON object with keys question, a, b, c, d, and correctAnswerChoice"},
      {"role": "user", "content": context}
    ]
  )
  return {
    'statusCode': 200,
    'body': response.choices[0].message.content
  }