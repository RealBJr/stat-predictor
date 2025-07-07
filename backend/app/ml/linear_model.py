import pandas as pd
import matplotlib.pyplot as plt
from db.db_utils import get_engine

engine = get_engine()
data =  pd.read_sql("SELECT * FROM basketball_stats", engine)
print(data.head())