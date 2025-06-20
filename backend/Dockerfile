# Use official Python image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy contents into container
COPY . .

# Install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expose port (FastAPI usually runs on 8000)
EXPOSE 8000

# Start the FastAPI app
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]