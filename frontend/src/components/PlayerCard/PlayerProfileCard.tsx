import { Flex } from "@mantine/core";
import { PlayerJerseyInfo } from "./PlayerJerseyInfo";
import { PlayerHeightWeightInfo } from "./PlayerHeightWeightInfo";
import { PlayerGeneralInfo } from "./PlayerGeneralInfo";

export function PlayerProfileCard() {
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