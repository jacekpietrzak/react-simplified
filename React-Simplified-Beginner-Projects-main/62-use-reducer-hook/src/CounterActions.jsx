import React, { useReducer } from 'react';

const ACTION = {
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
  RESET: 'RESET',
  INCREMENT_BY_5: 'INCREMENT_BY_5',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.DECREMENT:
      return state - 1;
    case ACTION.INCREMENT:
      return state + 1;
    case ACTION.RESET:
      return 0;
    case ACTION.INCREMENT_BY_5:
      return state + action.payload.value;
    default:
      return state;
  }
}

export default function CounterActions({ initialCount = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <div>
      <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
      <button
        onClick={() =>
          dispatch({ type: ACTION.INCREMENT_BY_5, payload: { value: 5 } })
        }
      >
        + 5
      </button>
      <button onClick={() => dispatch({ type: ACTION.RESET })}>Reset</button>
    </div>
  );
}
