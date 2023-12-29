import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENT':
      return state + 1;
    case 'RESET':
      return 0;
    case 'INCREMENT_BY_5':
      return state + action.payload.value;
    default:
      return state;
  }
}

export default function CounterBasic({ initialCount = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button
        onClick={() =>
          dispatch({ type: 'INCREMENT_BY_5', payload: { value: 5 } })
        }
      >
        + 5
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
