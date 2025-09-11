// src/layout/Layout.tsx
import { AppShellHeader, Container } from '@mantine/core';

export default function DefaultLayout() {
  return (
    <AppShellHeader p="md">
      <Container>
        <strong>My App Header</strong>
      </Container>
    </AppShellHeader>
  );
}