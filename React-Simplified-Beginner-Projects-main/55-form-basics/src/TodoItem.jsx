import React from 'react';

export default function TodoItem({
  id,
  name,
  completed,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li>
      <input
        id={id}
        type="checkbox"
        onChange={(e) => {
          toggleTodo(id, e.target.checked);
        }}
        checked={completed}
      />
      <label
        htmlFor={id}
        style={
          completed
            ? { textDecoration: 'line-through', userSelect: 'none' }
            : { textDecoration: 'none', userSelect: 'none' }
        }
      >
        {name}
      </label>
      <button onClick={() => deleteTodo(id)}>delete</button>
    </li>
  );
}
