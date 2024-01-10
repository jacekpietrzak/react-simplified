import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Team from './pages/Team';
import Error from './pages/Error';
import Navbar from './Navbar';
import TeamMember from './TeamMember';
import NavbarTeam from './NavbarTeam';
import NewTeamMember from './NewTeamMember';

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
      //{ path: '*', element: <h1>404</h1> }, // we can use wild card '*' to show page for 404
      { path: '*', element: <Navigate to={'/'} /> }, //or we can redirect to a specific page using Navigate. We can use it in a component as well like in About
      { path: '/', element: <Home /> },
      { path: '/test/*', element: <h2>Test</h2> }, // matches eveyrhing that starts with /test/ '*' at the end tells to match anything that start with test no matter what is after test/anything
      { path: '/store', element: <Store /> },
      { path: '/about', element: <About /> },
      {
        path: '/team',
        element: <NavTeamLayout />,
        children: [
          { index: true, element: <Team /> },
          { path: ':memberId', element: <TeamMember name="joe" /> },
          { path: 'new', element: <NewTeamMember /> },
        ],
      },
    ],
  },
]);
