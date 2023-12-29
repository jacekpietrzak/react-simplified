import { useRef, useState } from 'react';
import TodoItem from './TodoItem';

function App() {
  const nameRef = useRef();

  const [newTodoName, setNewTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  console.log(todos);

  function handleSubmit(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    if (name === '') {
      return;
    }
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), name: name, completed: false },
      ];
    });
  }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (newTodoName === '') {
  //     return;
  //   }
  //   setTodos((currentTodos) => {
  //     return [
  //       ...currentTodos,
  //       { id: crypto.randomUUID(), name: newTodoName, completed: false },
  //     ];
  //   });
  // }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed };
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-input">New Todo: </label>
        <input type="text" name="todoName" id="todo-input" ref={nameRef} />
        {/* <input
          type="text"
          name="todoName"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        /> */}
        <button type="submit">Add Todo</button>
      </form>

      {todos.length === 0 ? (
        <p>List is empty. Add some todos</p>
      ) : (
        <ul>
          {todos.map((todo) => {
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
      )}
    </>
  );
}

export default App;
