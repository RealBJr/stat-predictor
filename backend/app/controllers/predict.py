from fastapi import APIRouter

router = APIRouter()

@router.get("/predict")
def make_prediction():
    return {"prediction": "some result"}