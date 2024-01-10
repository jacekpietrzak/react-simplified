import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';

export default function RootLayout() {
  const { state } = useNavigation();

  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Breadcrumbs />
      {state === 'loading' ? <div className="loading-spinner" /> : null}
      <Outlet />
    </>
  );
}
