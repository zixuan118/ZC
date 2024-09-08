from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from zixuan_chain import ZixuanPersonaChain

app = FastAPI()

class ChatRequest(BaseModel):
    query: str
    history: list

zixuan_chain = ZixuanPersonaChain(personality_data_path='personality_data.jsonl')

# 添加 CORS 中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许所有来源
    allow_credentials=True,
    allow_methods=["*"],  # 允许所有 HTTP 方法
    allow_headers=["*"],  # 允许所有 HTTP 头
)

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    response = zixuan_chain.process_input(request.query, request.history)
    return {"response": response}
