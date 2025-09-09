import joblib
import numpy as np
import pandas as pd
import os
from dotenv import load_dotenv
from sklearn.preprocessing import StandardScaler
from pathlib import Path
from pre_process import preprocess

# --- Gradient Descent Function ---
def gradient_descent_multi(
    feature_matrix, 
    label, 
    weights_init=None, 
    bias_init=0, 
    learning_rate=0.01, 
    epochs=1000, 
    tolerance=1e-6
):
    amt_rows, nbr_features = feature_matrix.shape
    weights_vector = np.zeros(nbr_features) if weights_init is None else weights_init
    bias = bias_init

    for _ in range(epochs):
        prediction = feature_matrix @ weights_vector + bias
        error = label - prediction

        # Gradients
        weights_gradient = -(2/amt_rows) * (feature_matrix.T @ error)
        bias_gradient = -(2/amt_rows) * np.sum(error)

        # Update
        new_weights = weights_vector - learning_rate * weights_gradient
        new_bias = bias - learning_rate * bias_gradient

        # Tolerance check
        if np.all(np.abs(new_weights - weights_vector) < tolerance) and abs(new_bias - bias) < tolerance:
            break

        weights_vector, bias = new_weights, new_bias

    return weights_vector, bias

# --- Train and Upload Models in ./artifacts/ ---
def train_models(data: pd.DataFrame, features: list, target: str, output_dir="artifacts"):
    models_dir = Path(output_dir)
    models_dir.mkdir(parents=True, exist_ok=True)

    player_models = {}

    for player_name, player_df in data.groupby("PLAYER_NAME"):
        # Skip players with too few games
        if len(player_df) < 100:
            continue

        X_raw = player_df[features].values.astype(float)
        y = player_df[target].values.astype(float)

        # Standardize
        scaler = StandardScaler()
        X = scaler.fit_transform(X_raw)

        # Train with gradient descent
        weights, bias = gradient_descent_multi(
            X, y, learning_rate=0.01, epochs=10000, tolerance=1e-8
        )

        # Save model (weights, bias, scaler, features)
        player_models[player_name] = {
            "weights": weights,
            "bias": bias,
            "scaler": scaler,
            "features": features
        }

        
    joblib.dump(player_models, models_dir / "all_players_models.joblib")
    
    return player_models


if __name__ == "__main__":
    load_dotenv()
    DATABASE_URL_LOCAL = os.getenv("DATABASE_URL_LOCAL")
    data = preprocess(DATABASE_URL_LOCAL)

    # Define features
    features = [
        "opposite_team_Drtg",
        "opposite_team_eFg_percent_defense",
        "opposite_team_ft_fga_defense",
        "opposite_team_pace",
        "opposite_team_blk"
    ]
    target = "player_points_diff"

    # Train & Save models
    models = train_models(data, features, target, output_dir="artifacts")
    print(f"Trained and saved {len(models)} player models.")