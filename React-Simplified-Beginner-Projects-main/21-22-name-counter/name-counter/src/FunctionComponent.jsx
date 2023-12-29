import { useEffect, useState } from 'react';
import WindowWidth from './WindowWidth';

export default function FunctionComponent() {
  const [name, setName] = useState('Jacek');
  const [age, setAge] = useState(37);
  const [width, setWidth] = useState(window.innerWidth);
  const [visible, setVisible] = useState(true);

  // run only when age change. When component is mounted age all the states are set so it will run once when mounted and each time when the age state is changed
  useEffect(() => {
    console.log(`Age has changed ${age}`);
  }, [age]);

  // this useEffect will run only when component is mounted
  useEffect(() => {
    console.log('mounted');
  }, []);

  // this useEffect will run on each mount. It will add eventListener. It can add multiple ones because we didnt remove it.
  useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handler);

    console.log('resize effect mounted');

    // to remove event listener we need to use return statement. It is a cleanup function. At this example cleanup is

    return () => {
      document.removeEventListener('resize', handler);
      console.log('resize effect cleanup');
    };
  }, [visible]);

  // this time this useEffect will unmount when name state will change and rung again for new state.
  useEffect(() => {
    const handler = () => {
      console.log(name);
    };
    document.addEventListener('click', handler);
    console.log('name effect mounted');

    return () => {
      document.removeEventListener('click', handler);
      console.log('name effect cleanup');
    };
  }, [name]);

  function handleNameInputChange(e) {
    return setName(e.target.value);
  }

  function handleAgeDecrement() {
    setAge((currentAge) => currentAge - 1);
  }
  function handleAgeIncrement() {
    setAge((currentAge) => currentAge + 1);
  }

  const childComponent = visible ? <WindowWidth width={width} /> : null;

  return (
    <div>
      <input type="text" value={name} onChange={handleNameInputChange} />
      <div>
        <button onClick={handleAgeDecrement}>-</button>
        {age}
        <button onClick={handleAgeIncrement}>+</button>
      </div>
      <p>
        My name is {name} and I am {age} years old
      </p>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'hide width' : 'show width'}
      </button>
      {childComponent}
    </div>
  );
}
