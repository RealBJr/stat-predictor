# 🏀 Linear Regression - Predicting Player Performance

## Overview
This project explores the relationship between a basketball player’s scoring performance and the defensive strength of opposing teams. Instead of predicting raw points directly, we measure how much a player’s performance deviates from their season average when facing different defenses.

Using linear regression, we aim to identify whether opponent defensive rating (and potentially other team stats) can explain or predict these deviations. The model allows us to estimate how many points above or below their average a player is expected to score against a given team.

## Objective
- Understand the mechanics of linear regression
- Implement closed-form and gradient descent versions manually
- Compare performance with `sklearn.linear_model.LinearRegression`

## Dataset
- [NBA Games Stats Dataset](https://www.kaggle.com/datasets/wyattowalsh/basketball/data)
- [NBA Players Stats Dataset](https://www.kaggle.com/datasets/justinas/nba-players-data)

## Features to Use
- Minutes Played
- Assists
- Rebounds
- Field Goal Attempts

## Evaluation Metrics
- Mean Squared Error (MSE)
- R² Score

## Results
TBD

## 📚 Math Concepts
- Least Squares Estimation
- Gradient Descent
- Cost Function (MSE)
