import { Form, Link, useLoaderData, useNavigation } from 'react-router-dom';
import TodoItem from '../components/TodoItem';
import { useEffect, useRef } from 'react';

export default function TodoList() {
  const { query, todos } = useLoaderData();
  const { state } = useNavigation();

  const queryRef = useRef();

  useEffect(() => {
    queryRef.current.value = query;
  }, [query]);

  return (
    <div className="container">
      <h1 className="page-title mb-2">
        Todos
        <div className="title-btns">
          <Link to={'/new'} className="btn">
            New
          </Link>
        </div>
      </h1>

      <Form>
        <div className="form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="query">Search</label>
              <input type="search" name="query" id="query" ref={queryRef} />
            </div>
            <button className="btn">Search</button>
          </div>
        </div>
      </Form>

      {state === 'loading' ? (
        'loading...'
      ) : todos.length !== 0 ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      ) : (
        'nothing found'
      )}
    </div>
  );
}

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todoListRoute = {
  loader,
  element: <TodoList />,
};
