from fastapi import FastAPI
from .controllers import predict_controller

app = FastAPI()

app.include_router(predict_controller.router)