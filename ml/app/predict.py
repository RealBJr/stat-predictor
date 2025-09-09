import joblib
import numpy as np
from pydantic import BaseModel
from fastapi import FastAPI

player_models = joblib.load("artifacts/all_players_models.joblib")

# Example: get Steph Curry’s model
model = player_models["Stephen Curry"]

app = FastAPI()

# Define request schema
class PredictionRequest(BaseModel):
    player_name: str
    features: list[float] 

@app.post('/predict')
def predict(request: PredictionRequest):
    """
    Predicts the class of a given set of features.

    Args:
        data (dict): A dictionary containing the features to predict.
        e.g. {"features": [1, 2, 3, 4]}

    Returns:
        dict: A dictionary containing the predicted points.
    """
    player_name = request.player_name

    if player_name not in player_models:
        return {"error": f"No model found for player '{player_name}'"}

    model = player_models[player_name]
    weights, bias, scaler = model["weights"], model["bias"], model["scaler"]
    
    # Prepare input
    features = np.array(request.features).reshape(1, -1)
    features_scaled = scaler.transform(features)

    # Linear regression prediction
    prediction = features_scaled @ weights + bias
    return {
        "player": player_name,
        "predicted_points_diff": float(prediction[0])
    }