import { Text, Box, Flex } from '@mantine/core';

interface StatProps {
    stat: number;
}
export function CareerStatBanner({ stat }: StatProps) {

    return (
        <Box
            style={{
                borderRadius: "0%",
                width: "100%",
                height: "20%",
                position: "absolute",
                left: "0",
                bottom: "0",
                zIndex: 10,
                backgroundColor: "rgba(34, 151, 153, 0.3)",
                backdropFilter: "blur(10px)",
                border: "1px white solid"
            }}
        >
            <Flex
                direction={{ base: 'row' }}
                style={{}}
            >
                <Text >Career Stats: {stat}</Text>
            </Flex>
        </Box >
    );
}
