import { Text, Box, Flex } from '@mantine/core';
import { CareerStatBanner } from '../CareerStatBanner/CareerStatBanner';

export function PlayerSelect() {
    const statCards = [
        <CareerStatBanner stat={0} key={0} />,
        <CareerStatBanner stat={10} key={1} />,
        <CareerStatBanner stat={25} key={2} />,
    ];

    return (
        <>
            <Box
                w={100}
                h={100}
                bg="blue"
                style={{ borderRadius: "50%" }}
            >
                <Text>Select Player Name</Text>
                <Flex
                    direction={{ base: 'row' }}
                    gap={{ base: 'sm', sm: 'lg' }}
                >
                    {statCards}
                </Flex>
            </Box>
        </>
    );
}
