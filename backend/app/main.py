from fastapi import FastAPI
from controllers import predict

app = FastAPI()

app.include_router(predict.router)