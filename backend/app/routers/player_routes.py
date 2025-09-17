from fastapi import APIRouter
from ..models.player_stats import PlayerStats
from ..services import player_service
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from ..db_utils import get_db

router = APIRouter(prefix="/player", tags=["player"])

@router.get("/", response_model=PlayerStats)
def get_player(player_name: str = Query(None), db: Session = Depends(get_db)):
    player = player_service.get_player(db, player_name)
    if player is None:
        raise HTTPException(status_code=404, detail=f"Player '{player_name}' not found")
    return player

