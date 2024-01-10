import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';

function App() {
  const fullUrl = window.location.href;
  console.log(fullUrl);
  const pathnameUrl = window.location.pathname;
  console.log(pathnameUrl);

  let component;

  switch (pathnameUrl) {
    case '/':
      component = <Home />;
      break;
    case '/about':
      component = <About />;
      break;
    case '/store':
      component = <Store />;
      break;
  }

  return (
    <>
      <nav>
        <ul
          style={{
            display: 'flex',
            gap: '1rem',
            listStyle: 'none',
            margin: '16px',
            padding: 0,
          }}
        >
          <li>
            <a href={`http://localhost:5173`}>home</a>
          </li>
          <li>
            <a href={`http://localhost:5173/about`}>about</a>
          </li>
          <li>
            <a href={`http://localhost:5173/store`}>store</a>
          </li>
        </ul>
      </nav>

      {component}
    </>
  );
}

export default App;
