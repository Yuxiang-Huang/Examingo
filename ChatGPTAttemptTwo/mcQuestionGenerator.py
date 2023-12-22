from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv('../.env')
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
response = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "Create a multiple choice question based on user input in a JSON object with keys question, a, b, c, d, and correctAnswerChoice"},
    {"role": "user", "content": "Bob has five cats"}
  ]
)
print(type(response.choices[0].message.content))
print(response.choices[0].message.content)