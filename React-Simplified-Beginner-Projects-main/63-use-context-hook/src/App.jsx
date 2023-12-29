import { useEffect, useState, createContext } from 'react';
import { Child } from './Child';

export const ThemeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode((d) => !d);
  }

  useEffect(() => {
    document.body.style.background = isDarkMode ? '#333' : 'white';
    document.body.style.color = isDarkMode ? 'white' : '#333';
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div style={{ padding: '1em' }}>
        <Child />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          animi amet itaque cupiditate esse facere obcaecati, veritatis
          voluptas, quidem quas minima iste, quisquam illo? Nihil saepe
          temporibus explicabo architecto nisi.
        </p>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
