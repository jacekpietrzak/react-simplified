import React, { useEffect, useState } from 'react';

export default function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('Re-render');
  });

  useEffect(() => {
    console.log('Hi, Child mounted');

    return () => {
      console.log('Bye, Child unmounts');
    };
  }, []);

  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`);
  }, [name, age]);

  useEffect(() => {
    document.title = name;
    const timeOut = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button onClick={() => setAge((currentAge) => currentAge - 1)}>
          -
        </button>
        {age}
        <button onClick={() => setAge((currentAge) => currentAge + 1)}>
          +
        </button>
      </div>
      <div>
        my name is {name} and I am {age} years old.
      </div>
    </div>
  );
}
