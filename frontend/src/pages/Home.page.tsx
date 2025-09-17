import { PlayerCard } from '@/components/PlayerCard/PlayerCard';
import { TeamCard } from '@/components/TeamCard/TeamCard';
import { VersusBanner } from '@/components/VersusBanner/VersusBanner';
import HomePageLayout from '@/components/HomePageLayout/HomePageLayout';

export function HomePage() {
  return (
    <>
      <HomePageLayout>
        <PlayerCard />
        <TeamCard />
      </HomePageLayout>
      <VersusBanner />
    </>
  );
}
