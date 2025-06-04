from sqlalchemy import create_engine
from dotenv import load_dotenv
import os
import pandas as pd
import kagglehub

# Load .env variables
load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")

# Download dataset from Kaggle
path = kagglehub.dataset_download("jacobbaruch/basketball-players-stats-per-season-49-leagues")

# Automatically find the first CSV file in the folder
csv_files = [f for f in os.listdir(path) if f.endswith('.csv')]
if not csv_files:
    raise FileNotFoundError("No CSV file found in the downloaded dataset folder.")

csv_path = os.path.join(path, csv_files[0])

# Load CSV into DataFrame
df = pd.read_csv(csv_path)

# Connect to PostgreSQL and write table
engine = create_engine(DATABASE_URL)
df.to_sql("basketball_stats", con=engine, index=False, if_exists="replace")