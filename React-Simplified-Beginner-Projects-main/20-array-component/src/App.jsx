import React, { useEffect, useState } from 'react';

const INITIAL_VALUE = ['A', 'B', 'C'];

export default function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [selectedElement, setSelectedElement] = useState('');
  const [selectedElementToAddToStart, setSelectedElementToAddToStart] =
    useState('');
  const [selectedElementToAddToEnd, setSelectedElementToAddToEnd] =
    useState('');
  const [selectedElementToUpdate, setSelectedElementToUpdate] = useState('');
  const [elementToUpdate, setElementToUpdate] = useState('');

  const [selectedElementToAddToIndex, setSelectedElementToAddToIndex] =
    useState('');
  const [index, setIndex] = useState('');

  function resetArray() {
    return setArray(INITIAL_VALUE);
  }

  function removeFirstElement() {
    return setArray((currentArray) => currentArray.slice(1));
  }

  function removeSelectedElement(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  }

  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function clearArray() {
    setArray([]);
  }

  function updateElement(selectedElementToUpdate, elementToUpdate) {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === selectedElementToUpdate) return elementToUpdate;
        return element;
      });
    });
  }

  function addAtIndex(letter, index) {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ];
    });
  }

  useEffect(() => {
    console.log(array);
    setSelectedElement(array[0]);
    setSelectedElementToUpdate(array[0]);
  }, [array]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
        {array.join(', ')}
        <button onClick={resetArray}>Reset</button>
        <button onClick={clearArray}>Clear</button>
      </div>
      <div>
        <button onClick={removeFirstElement}>Remove First element</button>
      </div>
      <div
        style={{
          padding: '12px',
          backgroundColor: '#ddd',
          borderRadius: '4px',
        }}
      >
        <p>Select element to remove</p>
        <p>Selected element: {selectedElement}</p>
        <select
          value={selectedElement}
          onChange={(e) => setSelectedElement(e.target.value)}
        >
          {array.length !== 0 ? (
            array.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })
          ) : (
            <option value="array is empty">Array is empty</option>
          )}
        </select>
        {array.length !== 0 && (
          <button onClick={() => removeSelectedElement(selectedElement)}>
            Remove
          </button>
        )}
      </div>
      <div
        style={{
          padding: '12px',
          backgroundColor: '#ddd',
          borderRadius: '4px',
        }}
      >
        <p>Select element to add to start</p>
        <p>Selected element: {selectedElementToAddToStart}</p>
        <input
          value={selectedElementToAddToStart}
          onChange={(e) => setSelectedElementToAddToStart(e.target.value)}
        />
        {array.length !== 0 && (
          <button onClick={() => addLetterToStart(selectedElementToAddToStart)}>
            Add
          </button>
        )}
      </div>
      <div
        style={{
          padding: '12px',
          backgroundColor: '#ddd',
          borderRadius: '4px',
        }}
      >
        <p>Select element to add to end</p>
        <p>Selected element: {selectedElementToAddToEnd}</p>
        <input
          value={selectedElementToAddToEnd}
          onChange={(e) => setSelectedElementToAddToEnd(e.target.value)}
        />
        {array.length !== 0 && (
          <button onClick={() => addLetterToEnd(selectedElementToAddToEnd)}>
            Add
          </button>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '12px',
          backgroundColor: '#ddd',
          borderRadius: '4px',
          gap: '8px',
        }}
      >
        <p style={{ display: 'inline-flex' }}>Update </p>
        <select
          style={{ display: 'inline-flex' }}
          value={selectedElementToUpdate}
          onChange={(e) => setSelectedElementToUpdate(e.target.value)}
        >
          {array.length !== 0 ? (
            array.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })
          ) : (
            <option value="array is empty">Array is empty</option>
          )}
        </select>
        <p style={{ display: 'inline-flex' }}>to</p>
        <input
          value={elementToUpdate}
          onChange={(e) => setElementToUpdate(e.target.value)}
          style={{ display: 'inline-flex' }}
          type="text"
          name=""
          id=""
        />
        <button
          onClick={() => {
            updateElement(selectedElementToUpdate, elementToUpdate);
          }}
        >
          Update
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '12px',
          backgroundColor: '#ddd',
          borderRadius: '4px',
          gap: '8px',
        }}
      >
        <p style={{ display: 'inline-flex' }}>Add </p>
        <input
          value={selectedElementToAddToIndex}
          onChange={(e) => setSelectedElementToAddToIndex(e.target.value)}
          style={{ display: 'inline-flex' }}
          type="text"
          name=""
          id=""
        />
        <p style={{ display: 'inline-flex' }}>to index</p>
        <input
          value={index}
          onChange={(e) => setIndex(e.target.value)}
          style={{ display: 'inline-flex' }}
          type="text"
          name=""
          id=""
        />

        <button
          onClick={() => {
            addAtIndex(selectedElementToAddToIndex, index);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}
