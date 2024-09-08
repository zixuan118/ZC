import openai
import os
import time
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

# 初始化OpenAI客户端
client = openai.OpenAI(
    api_key=os.getenv('OPENAI_API_KEY')
)

# 检查微调作业状态
fine_tune_job_id = 'ftjob-bSGaOPTtr5nINDzhtrnEtep7' 

while True:
    fine_tune_status = client.fine_tuning.jobs.retrieve(fine_tune_job_id)
    print(f"Status: {fine_tune_status.status}")
    print(f"Fine-tuned model: {fine_tune_status.fine_tuned_model}")

    if fine_tune_status.status in ['succeeded', 'failed']:
        # 如果作业成功或失败，则退出循环
        break

    # 等待一段时间后再次检查状态（例如，每隔60秒检查一次）
    time.sleep(60)

# 如果作业失败，检索错误日志
if fine_tune_status.status == 'failed':
    events = client.fine_tuning.jobs.list_events(fine_tune_job_id)
    for event in events.data:
        print(f"{event.created_at}: {event.message}")
