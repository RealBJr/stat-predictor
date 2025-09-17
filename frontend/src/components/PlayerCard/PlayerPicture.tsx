import { Box } from "@mantine/core";
import { useEffect, useState } from "react";

export function PlayerPicture() {
    const [playerName, setPlayerName] = useState("");
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchPlayerCutout();
    }, []);

    const fetchPlayerCutout = async () => {
        // if (!playerName) return;
        setLoading(true);
        setError(null);
        setImageUrl(null);

        try {
            const response = await fetch(
                `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(
                    // playerName
                    "Stephen Curry"
                )}`
            );
            const data = await response.json();
            console.log("data: ", data)
            if (data.player && data.player.length > 0) {
                const cutout = data.player[0].strCutout;
                if (cutout) {
                    setImageUrl(cutout);
                } else {
                    setError("No cutout image available for this player.");
                }
            } else {
                setError("Player not found.");
            }
        } catch (err) {
            setError("Failed to fetch player data.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <Box
            style={{
                width: "35%",
                height: "100%",
                position: "relative",
            }}
        >
            {/* Inner Circle (Background of Picture) */}
            <Box style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                border: "1px white solid",
                zIndex: 5,
                borderRadius: "50%",
                backgroundColor: "#424242"
            }}>
            </Box>
            <img
                src={imageUrl!}
                alt="Player"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: "relative",
                    zIndex: 10
                }}
            />
        </Box>
    );
}