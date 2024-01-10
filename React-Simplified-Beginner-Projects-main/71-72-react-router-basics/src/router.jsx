import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Team from './pages/Team';
import Error from './pages/Error';
import Navbar from './Navbar';
import TeamMember from './TeamMember';
import NavbarTeam from './NavbarTeam';

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function NavTeamLayout() {
  return (
    <>
      <NavbarTeam />
      <Outlet context="Hi from outlet" />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/store', element: <Store /> },
      { path: '/about', element: <About /> },
      {
        path: '/team',
        element: <NavTeamLayout />,
        children: [
          { index: true, element: <Team /> },
          { path: 'joe', element: <TeamMember name="joe" /> },
          { path: 'sally', element: <TeamMember name="sally" /> },
        ],
      },
    ],
  },
]);
