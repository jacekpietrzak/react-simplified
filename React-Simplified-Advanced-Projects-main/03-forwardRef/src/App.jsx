import { useRef } from 'react';
import { CustomInput } from './CustomInput';

function App() {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput ref={inputRef} />
      {/* <input ref={inputRef} style={{ border: '2px solid green' }} />; */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
