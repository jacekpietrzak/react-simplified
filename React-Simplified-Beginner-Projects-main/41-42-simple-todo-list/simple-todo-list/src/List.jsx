import React from 'react';
import TodoItem from './TodoItem';

export default function List({ toDoList, handleDelete }) {
  return (
    <ul id="list">
      {toDoList.map((element, index) => {
        return (
          <TodoItem
            key={index}
            element={element}
            handleDelete={() => handleDelete(index)}
          />
        );
      })}
    </ul>
  );
}
