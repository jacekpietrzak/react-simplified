import { useState } from 'react';
import { Counter } from './Counter';

// if we have two instances of the same component in the same tree structure they can share the same state. We need to show React hat they are completely different componnents with different parents. It need to have a different herarcy so it nows it is a different component.
// or we can use key to distinguish that this is a different component.
// After switching it will remove the state of the component because we dont persist it. Because we have keys on each element React know that these are different components.
// if key is changeo n the element React will rerender this element from scratch.

export default function App() {
  const [changeDogs, setChangeDogs] = useState(false);

  return (
    <div>
      {changeDogs ? (
        <>
          <span># of Dogs:</span>
          <Counter key={'dogs'} />
        </>
      ) : (
        <>
          <span># of Cogs:</span>
          <Counter key={'cats'} />
        </>
      )}
      <br />
      <button onClick={() => setChangeDogs((d) => !d)}>Switch</button>
    </div>
  );
}
