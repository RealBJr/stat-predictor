import { Text } from '@mantine/core';

export function VersusBanner() {
    return (
        <a href='#team-card'>
            <Text
                component="span"
                style={{
                    fontFamily: '"Anton", sans-serif',
                    fontSize: "11rem",
                    color: "white",
                    textShadow: "-10px -5px 10px rgba(0,0,0,0.5)",
                    position: "absolute",
                    right: "1%",
                    bottom: "0%",
                    zIndex: 100
                }}
            >
                VS
            </Text >
        </a>
    );
}
