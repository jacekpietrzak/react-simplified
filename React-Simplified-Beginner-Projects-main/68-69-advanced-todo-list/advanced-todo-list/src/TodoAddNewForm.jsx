import React, { useContext, useRef, useState } from 'react';
import { checkTodoName } from './validators';
import { TodoContext } from './App';

export default function TodoAddNewForm() {
  const nameRef = useRef();
  const { addNewTodo } = useContext(TodoContext);

  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);
  const todoNameErrors = isAfterFirstSubmit
    ? checkTodoName(nameRef.current.value)
    : [];

  function handleSubmit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const todoNameErrorsResult = checkTodoName(nameRef.current.value);
    if (todoNameErrorsResult.length === 0) {
      addNewTodo(nameRef.current.value);

      setIsAfterFirstSubmit(false);
      nameRef.current.value = '';
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="new-todo-form"
      className={`new-todo-form ${todoNameErrors.length > 0 && 'error'}`}
    >
      <label className="label" htmlFor="todo-input">
        New Todo
      </label>
      <input
        autoFocus
        type="text"
        id="todo-input"
        ref={nameRef}
        className="input"
      />
      {todoNameErrors.length > 0 && (
        <div className="msg">{todoNameErrors.join(', ')}</div>
      )}
      <button>Add Todo</button>
    </form>
  );
}
