import { Text, Box, Flex } from '@mantine/core';
import { CareerStatBanner } from '../CareerStatBanner/CareerStatBanner';
import { PlayerProfileCard } from './PlayerProfileCard';
import { PlayerPicture } from './PlayerPicture';
import { PlayerNameBanner } from './PlayerNameBanner';
import { SemiCircleBgPattern } from './SemiCircleBgPattern';
// check color palette: https://colorhunt.co/palette/f5f5f548cfcb229799424242

export function PlayerCard() {
  return (
    <Box
      id='player-card'
      style={{
        position: "relative",
        height: "100%",
        width: "45%",
        padding: "1%",
        borderRadius: "2%",
        backgroundColor: "#424242",
        color: "white",
        overflow: "hidden",
        zIndex: "1"
      }}
    >
      <PlayerNameBanner />
      <Flex
        direction={{ base: 'row' }}
        gap={{ base: 'sm', sm: 'lg' }}
        style={{
          width: "100%",
          height: "90%",
          justifyContent: "space-between"
        }}
      >
        <PlayerProfileCard />
        <PlayerPicture />
        <SemiCircleBgPattern />
      </Flex>
      <CareerStatBanner stat={10} />
    </Box>
  );
}
