from sqlalchemy import create_engine
from dotenv import load_dotenv
import os
load_dotenv()
DATABASE_URL_PROD = os.getenv("DATABASE_URL_PROD")
DATABASE_URL_LOCAL = os.getenv("DATABASE_URL_LOCAL")

def get_engine():
    return create_engine(str(DATABASE_URL_PROD))
