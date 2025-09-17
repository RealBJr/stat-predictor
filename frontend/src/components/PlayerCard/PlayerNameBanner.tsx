import { Flex, Box, Text } from '@mantine/core';
import "./PlayerName.css";
export function PlayerNameBanner() {
    let firstName = "Select";
    let lastName = "Player";
    return (
        <Flex
            direction={{ base: 'column' }}
            style={{
                fontFamily: '"Anton", sans-serif',
                color: "grey",
                position: "absolute",
                right: "0.1%",
                top: "5%",
                height: "fit-content",
                width: "40%",
                zIndex: 6
            }}
        >
            <Text
                component="span"
                style={{
                    fontSize: "4rem",
                    lineHeight: 1,
                    direction: "rtl",
                }}
            >
                {firstName}
            </Text >
            <Text
                component="span"
                style={{
                    color: "white",
                    fontSize: "10rem",
                    lineHeight: 1,
                    direction: "rtl",
                }}
            >
                {lastName.toUpperCase()}
            </Text >
        </Flex>
    );
}