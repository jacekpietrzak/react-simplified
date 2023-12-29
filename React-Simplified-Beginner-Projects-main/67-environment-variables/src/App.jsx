function App() {
  return (
    <>
      {/* NOT showed to the client */}
      <p>{import.meta.env.URL}</p>
      {/* showed to the client */}
      <p>{import.meta.env.VITE_URL}</p>
    </>
  );
}

export default App;
