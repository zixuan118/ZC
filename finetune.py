import openai
import os
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

# 初始化OpenAI客户端
client = openai.OpenAI(
    api_key=os.getenv('OPENAI_API_KEY')
)

# 上传文件
def upload_file(file_path):
    response = client.files.create(
        file=open(file_path, "rb"),
        purpose='fine-tune'
    )
    return response

# 上传训练文件
upload_response = upload_file('personality_data.jsonl')
training_file_id = upload_response.id

# 创建微调作业
fine_tune_response = client.fine_tuning.jobs.create(
    training_file=training_file_id,
    model="gpt-3.5-turbo-0125"
)

print("Fine-tune job created. Job ID:", fine_tune_response.id)
