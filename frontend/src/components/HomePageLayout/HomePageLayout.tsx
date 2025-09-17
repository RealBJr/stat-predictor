import { AppShell, Flex } from '@mantine/core';
import DefaultHeader from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function HomePageLayout({ children }: LayoutProps) {
  return (
    <AppShell header={{ height: 60 }} style={{ height: "100%" }}>
      <DefaultHeader />
      <AppShell.Main
        style={{
          display: "flex",
          width: "215%",
          minHeight: "100%",
          height: "100%",
          padding: "5% 3% 2% 3%",
          backgroundColor: "#F5F5F5"
        }}
      >
        <Flex
          style={{
            width: "100%",
            justifyContent: "space-between"
          }}
        >
          {children}
        </Flex>
      </AppShell.Main>
    </ AppShell >
  );
}