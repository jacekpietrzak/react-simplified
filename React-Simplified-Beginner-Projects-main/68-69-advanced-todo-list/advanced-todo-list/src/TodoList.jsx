import React, { useContext } from 'react';
import { TodoContext } from './App';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <ul id="list">
      {todos.length > 0 ? (
        todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })
      ) : (
        <p>Add some todos</p>
      )}
    </ul>
  );
}
