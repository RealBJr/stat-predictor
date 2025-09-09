from sqlalchemy import create_engine
import pandas as pd

def preprocess(db_url: str) -> pd.DataFrame:
    # Connect to SQLite DB
    engine = create_engine(db_url)

    # SQL query (removed LIMIT)
    query = """
    SELECT 
        gsl.*,
        g.SEASON,
        gsl.PTS - ps.pts AS player_points_diff,
        ps.pts as player_ppg,
        ps.reb as player_reb,
        ps.ast as player_ast,
        ps.net_rating as player_net_rating,
        tastt.Team as opposite_team,
        tastt.DRtg_float as opposite_team_Drtg,
        tastt.eFG_percent_defense as opposite_team_eFg_percent_defense,
        tastt."FT/FGA_defense" as opposite_team_ft_fga_defense,
        tastt.Pace as opposite_team_pace,
        tpstt.BLK as opposite_team_blk
    FROM games_stat_lines gsl
    LEFT JOIN games g 
        ON gsl.GAME_ID = g.GAME_ID
    LEFT JOIN player_stats ps 
        ON gsl.PLAYER_NAME = ps.player_name
        AND g.SEASON = ps.season_end 
    LEFT JOIN teams_advanced_stats_total_temp tastt
        ON tastt.TEAM_ID = CASE 
                                WHEN gsl.TEAM_ID = g.TEAM_ID_home 
                                    THEN g.TEAM_ID_away
                                WHEN gsl.TEAM_ID = g.TEAM_ID_away 
                                    THEN g.TEAM_ID_home
                            END
            and tastt."Year" = g.SEASON
    LEFT JOIN teams_pergame_stats_total_temp tpstt 
        ON tpstt.TEAM_ID = CASE 
                                WHEN gsl.TEAM_ID = g.TEAM_ID_home 
                                    THEN g.TEAM_ID_away
                                WHEN gsl.TEAM_ID = g.TEAM_ID_away 
                                    THEN g.TEAM_ID_home
                            END
            and tpstt."Year" = g.SEASON
    WHERE ps.pts IS NOT NULL
        AND gsl.PTS - ps.pts IS NOT NULL
        AND ps.reb IS NOT NULL
        AND ps.ast IS NOT NULL
        AND ps.net_rating IS NOT NULL
        AND tastt.DRtg_float IS NOT NULL;
    """

    # Load into pandas
    df = pd.read_sql(query, engine)
    return df

