import { createBrowserRouter, redirect } from 'react-router-dom';
import TodoList from './pages/TodoList';
import NewTodo from './pages/NewTodo';

export const router = createBrowserRouter([
  {
    index: true,
    element: <TodoList />,
    loader: async ({ request: { signal, url } }) => {
      const searchParams = new URL(url).searchParams;
      const query = searchParams.get('query') || '';
      return {
        query,
        todos: await fetch(`http://localhost:3000/todos?query=${query}`, {
          signal,
        }).then((res) => res.json()),
      };
    },
  },
  {
    path: '/new',
    element: <NewTodo />,
    action: async ({ request }) => {
      const formData = await request.formData();
      const title = formData.get('title');

      if (title === '') {
        return 'title is required';
      }

      await fetch('http://localhost:3000/todos', {
        method: 'POST',
        signal: request.signal,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, completed: false }),
      }).then((res) => res.json());

      return redirect('/');
    },
  },
]);
