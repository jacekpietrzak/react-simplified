import { useState } from 'react';
import './styles.css';
import TodoItem from './TodoItem';
import ToDoForm from './ToDoForm';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState([]);

  function addToDo() {
    if (inputValue === '') return;
    const toDo = {
      id: crypto.randomUUID(),
      name: inputValue,
      completed: false,
    };
    setToDoList((currentToDoList) => [...currentToDoList, toDo]);
    setInputValue('');
  }

  function toggleTodo(todoId, completed) {
    setToDoList((currentToDoList) => {
      return currentToDoList.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed };
        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setToDoList((currentToDoList) => {
      return currentToDoList.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <>
      <ul id="list">
        {toDoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
      <ToDoForm
        inputValue={inputValue}
        addToDo={addToDo}
        handleChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
}

export default App;
