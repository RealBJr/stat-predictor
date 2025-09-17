import { Box } from "@mantine/core";

export function SemiCircleBgPattern() {
    return (
        <Box
            style={{
                borderRadius: "50%",
                border: "1px white solid",
                backgroundColor: "yellow",
                position: "absolute",
                width: "50%",
                height: "110%",
                right: "-5%",
                bottom: "0",
                zIndex: "-1"
            }}
        >
        </Box>
    );
}