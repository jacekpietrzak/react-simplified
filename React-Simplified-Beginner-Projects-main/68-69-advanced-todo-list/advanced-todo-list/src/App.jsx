import { useReducer, useState } from 'react';
import './styles.css';
import { checkTodoName } from './validators';
import { useLocalStorage } from './useLocalStorage';

const initialState = [];

const ACTION = {
  SET_TODOS: 'SET_TODOS',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.SET_TODOS:
      return (state = [...state, action.payload.value]);
  }
}

function App() {
  // const [todos, dispatch] = useReducer(reducer, initialState);
  const [todos, setTodos] = useLocalStorage('TODOS', []);
  const [todoName, setTodoName] = useLocalStorage('TODO_NAME', '');
  const [filter, setFilter] = useLocalStorage('FILTER', '');
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);
  const [editId, setEditId] = useState('');
  const [editedTodoName, setEditedTodoName] = useState();

  const todoNameErrors = isAfterFirstSubmit ? checkTodoName(todoName) : [];
  console.log('todoNameErrors', todoNameErrors);

  function handleSubmit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const todoNameErrorsResult = checkTodoName(todoName);
    if (todoNameErrorsResult.length === 0) {
      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), name: todoName, completed: false },
        ];
      });
      setIsAfterFirstSubmit(false);
      setTodoName('');
    }
  }

  function handleDelete(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  function handleOpenEdit(id) {
    setEditId(id);
  }

  return (
    <>
      <div className="filter-form">
        <div className="filter-form-group">
          <label htmlFor="name">Filter Todos</label>
          <input
            type="text"
            id="name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="input"
          />
        </div>
        <label>
          <input type="checkbox" />
          Hide Completed
        </label>
      </div>

      <form
        onSubmit={handleSubmit}
        id="new-todo-form"
        className={`new-todo-form ${todoNameErrors.length > 0 && 'error'}`}
      >
        <label className="label" htmlFor="todo-input">
          New Todo
        </label>
        <input
          type="text"
          id="todo-input"
          value={todoName}
          className="input"
          onChange={(e) => setTodoName(e.target.value)}
        />
        {todoNameErrors.length > 0 && (
          <div className="msg">{todoNameErrors.join(', ')}</div>
        )}
        <button>Add Todo</button>
      </form>

      <ul id="list">
        {todos.length > 0 ? (
          todos.map((todo) => {
            return (
              <li key={todo.id} className="list-item">
                <label className="list-item-label">
                  <input type="checkbox" data-list-item-checkbox />
                  {editId === todo.id ? (
                    <>
                      <input type="text" defaultValue={todo.name} />
                    </>
                  ) : (
                    <span data-list-item-text>{todo.name}</span>
                  )}
                </label>
                {editId === todo.id ? (
                  <>
                    <button onClick={() => setEditId('')}>x</button>
                    <button onClick={() => {}}>ok</button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleOpenEdit(todo.id)}
                      data-button-edit
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      data-button-delete
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            );
          })
        ) : (
          <p>Add some todos</p>
        )}
      </ul>
    </>
  );
}

export default App;
