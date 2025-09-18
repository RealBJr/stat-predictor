import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv()
server = os.getenv("DATABASE_PROD_SERVER")
database = os.getenv("DATABASE_PROD")
username = os.getenv("DATABASE_PROD_USERNAME")
password = os.getenv("DATABASE_PROD_PASSWORD")

try:
    conn_str = f"mssql+pymssql://{username}:{password}@{server}:1433/{database}"
    engine = create_engine(conn_str)
    ClientSession = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    
    Base = declarative_base()
    
    # Dependency for FastAPI
    def get_db():
        db = ClientSession()
        try:
            yield db
        finally:
            db.close()
except Exception as e:
    print(f"   ❌ Failed: {str(e)[:80]}...")
    