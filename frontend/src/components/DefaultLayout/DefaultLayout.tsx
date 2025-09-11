// src/layout/Layout.tsx
import { AppShell, AppShellMain, Container } from '@mantine/core';
import DefaultHeader from './DefaultHeader';

interface LayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <AppShell padding="md">
      <DefaultHeader />
      <AppShellMain>
        <Container>{children}</Container>
      </AppShellMain>
    </AppShell >
  );
}