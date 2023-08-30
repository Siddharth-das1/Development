#Note: The openai-python library support for Azure OpenAI is in preview.
import os
import openai
openai.api_type = "azure"
openai.api_base = "https://travel-assiatant-open-ai.openai.azure.com/"
openai.api_version = "2023-03-15-preview"
openai.api_key = os.getenv("5ebb9e40a803429f96113f19fee631f9")

response = openai.ChatCompletion.create(
  engine="Travel-Assist-Ai",
  messages = [],
  temperature=0.5,
  max_tokens=800,
  top_p=0.95,
  frequency_penalty=0,
  presence_penalty=0,
  stop=None)