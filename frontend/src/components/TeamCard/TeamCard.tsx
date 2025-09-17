import { Flex, Text, Box } from '@mantine/core';
import { CareerStatBanner } from '../CareerStatBanner/CareerStatBanner';

export function TeamCard() {
  const statCards = [
    <CareerStatBanner stat={0} key={0} />,
    <CareerStatBanner stat={10} key={1} />,
    <CareerStatBanner stat={25} key={2} />,
  ];

  return (
    <Box
      id='team-card'
      style={{
        maxHeight: "100%",
        width: "45%",
        padding: "3%",
        borderRadius: "2%",
        backgroundColor: "#424242",
        color: "white"
      }}
    >
      <Text>Select Player Name</Text>
      <Flex
        direction={{ base: 'column' }}
        gap={{ base: 'sm', sm: 'lg' }}
      >
      </Flex>
    </Box>
  );
}
