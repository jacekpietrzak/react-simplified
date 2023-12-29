import UserCard from './UserCard';
import user from './user.json';
import './user.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  function handleIncrement() {
    setNumber((currentNumber) => currentNumber + 1);
    setNumber((currentNumber) => currentNumber + 1);
  }

  return (
    <>
      <UserCard
        name={user.name}
        age={user.age}
        phone={user.phoneNumber}
        address={user.address}
      />

      {/* <div onClick={() => setNumber((currentNumber) => currentNumber + 1)}>
        {number}
      </div> */}
      <div onClick={handleIncrement}>{number}</div>
    </>
  );
}

export default App;
