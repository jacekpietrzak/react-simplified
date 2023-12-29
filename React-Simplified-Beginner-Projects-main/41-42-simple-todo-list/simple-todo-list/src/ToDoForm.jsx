import React, { useState } from 'react';

export default function ToDoForm({ inputValue, addToDo, handleChange }) {
  return (
    <div id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        id="todo-input"
      />
      <button onClick={addToDo}>Add Todo</button>
    </div>
  );
}
