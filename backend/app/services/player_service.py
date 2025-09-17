from sqlalchemy.orm import Session
from ..models.player_stats import PlayerStats

def get_player(db: Session, player_name: str):
    print("QUERYING HEREEEEE =>, using player_name=", player_name)
    return db.query(PlayerStats).filter(
        PlayerStats.player_name == player_name   # type: ignore
    ).first()