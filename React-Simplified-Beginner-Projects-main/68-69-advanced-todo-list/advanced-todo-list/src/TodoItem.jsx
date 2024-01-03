import React, { useContext, useRef, useState } from 'react';
import { TodoContext } from './App';

export default function TodoItem({ id, name, completed }) {
  const { deleteTodo, toggleTodo, updateTodo } = useContext(TodoContext);

  const [isEditing, setIsEditing] = useState(false);
  const nameRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();

    updateTodo(id, nameRef.current.value);

    setIsEditing(false);
  }
  return (
    <li className="list-item">
      {isEditing === true ? (
        <div style={{ display: 'flex' }}>
          <form onSubmit={handleSubmit}>
            <input type="text" defaultValue={name} autoFocus ref={nameRef} />
            <button data-button-edit>save</button>
          </form>
          <button onClick={() => setIsEditing(false)}>x</button>
        </div>
      ) : (
        <>
          <label className="list-item-label">
            <input
              type="checkbox"
              data-list-item-checkbox
              checked={completed}
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <span data-list-item-text>{name}</span>
          </label>
          <button onClick={() => setIsEditing(true)} data-button-edit>
            Edit
          </button>
          <button onClick={() => deleteTodo(id)} data-button-delete>
            Delete
          </button>
        </>
      )}
    </li>
  );
}
