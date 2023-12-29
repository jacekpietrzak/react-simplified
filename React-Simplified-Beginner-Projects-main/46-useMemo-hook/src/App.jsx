import { useMemo, useState } from 'react';

const LIST = Array(1000000)
  .fill()
  .map((_, i) => i + 1);

function App() {
  const [query, setQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filteredList = useMemo(() => {
    return LIST.filter((number) => number.toString().includes(query));
  }, [query]);
  // console.log(filteredList.length);

  return (
    <div
      style={{
        background: isDarkMode ? '#333' : 'white',
        color: isDarkMode ? 'white' : '#333',
      }}
    >
      <label>
        Query:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setIsDarkMode(e.target.checked)}
          checked={isDarkMode}
        />
        Dark Mode
      </label>
    </div>
  );
}

export default App;
