import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import DefaultLayout  from '../components/DefaultLayout/DefaultLayout';

export function HomePage() {
  return (
    <>
      <DefaultLayout>
        <Welcome />
        <ColorSchemeToggle />
      </DefaultLayout>
    </>
  );
}
