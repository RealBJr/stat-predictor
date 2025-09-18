import { Flex } from "@mantine/core";
import { PlayerJerseyInfo } from "./PlayerJerseyInfo";
import { PlayerHeightWeightInfo } from "./PlayerHeightWeightInfo";
import { PlayerGeneralInfo } from "./PlayerGeneralInfo";
import { useEffect, useState } from "react";

export function PlayerProfileCard() {
    const [playerData, setPlayerData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/player?player_name=Steph Curry');
                const result = await response.json();
                console.log(result)
                setPlayerData(result);
            } catch {
                console.log("Error with API endpoint");
            }
        }
        fetchData();
    }, []);
    return (
        <Flex
            direction={{ base: 'column' }}
            gap={{ base: 'sm', sm: 'lg' }}
            style={{
                width: "40%",
                height: "100%",
                border: "1px white solid"
            }}
        >
            <PlayerJerseyInfo />
            <PlayerHeightWeightInfo />
            <PlayerGeneralInfo />
        </Flex>
    );
}