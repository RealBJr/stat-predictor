from sqlmodel import SQLModel, Field
from typing import Optional

class PlayerStats(SQLModel, table=True):
    __tablename__ : str = "player_stats"
    Unnamed_0: Optional[int] = Field(default=None, primary_key=True)
    player_name: Optional[str] = None
    team_abbreviation: Optional[str] = None
    age: Optional[float] = None
    player_height: Optional[float] = None
    player_weight: Optional[float] = None
    college: Optional[str] = None
    country: Optional[str] = None
    draft_year: Optional[str] = None
    draft_round: Optional[str] = None
    draft_number: Optional[str] = None
    gp: Optional[int] = None
    pts: Optional[float] = None
    reb: Optional[float] = None
    ast: Optional[float] = None
    net_rating: Optional[float] = None
    oreb_pct: Optional[float] = None
    dreb_pct: Optional[float] = None
    usg_pct: Optional[float] = None
    ts_pct: Optional[float] = None
    ast_pct: Optional[float] = None
    season: Optional[str] = None
    season_end: Optional[int] = None
