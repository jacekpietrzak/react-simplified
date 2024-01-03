import { createContext, useEffect, useReducer, useState } from 'react';
import './styles.css';
import { useLocalStorage } from './useLocalStorage';
import TodoAddNewForm from './TodoAddNewForm';
import TodoList from './TodoList';
import TodoFilterForm from './TodoFilterForm';

const ACTIONS = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  TOGGLE: 'TOGGLE',
  DELETE: 'DELETE',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          name: action.payload.name,
          completed: false,
        },
      ];

    case ACTIONS.TOGGLE:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: action.payload.completed };
        }

        return todo;
      });

    case ACTIONS.DELETE:
      return state.filter((todo) => todo.id !== action.payload.id);

    case ACTIONS.UPDATE:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.updatedName };
        }
        return todo;
      });

    default:
      throw new Error(`No action found for ${action.type}.`);
  }
}

export const TodoContext = createContext();

function App() {
  const [filter, setFilter] = useLocalStorage('FILTER', '');
  const [hideCompleted, setHideCompleted] = useState(false);
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem('TODOS');
    if (value == null) return initialValue;
    return JSON.parse(value);
  });

  useEffect(() => {
    localStorage.setItem('TODOS', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    if (hideCompleted === true && todo.completed === true) {
      return false;
    }
    return todo.name.includes(filter);
  });

  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name: name } });
  }

  function toggleTodo(id, completed) {
    dispatch({
      type: ACTIONS.TOGGLE,
      payload: { id: id, completed: completed },
    });
  }

  function deleteTodo(id) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: id } });
  }

  function updateTodo(id, updatedName) {
    dispatch({
      type: ACTIONS.UPDATE,
      payload: { id: id, updatedName: updatedName },
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addNewTodo,
        toggleTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      <TodoFilterForm
        filter={filter}
        setFilter={setFilter}
        hideCompleted={hideCompleted}
        setHideCompleted={setHideCompleted}
      />
      <TodoAddNewForm />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default App;
