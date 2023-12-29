import { useEffect, useState } from 'react';

const url = 'https://jsonplaceholder.typicode.com/todos';

function App() {
  const [todos, setTodos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  // useEffect(() => {
  //   setError(null);
  //   const controller = new AbortController();

  //   const fetchTodos = async () => {

  //     try {
  //      setIsLoading(true);
  //     const response = await
  //    } catch (error) {

  //    }

  //     fetch(url, { signal: controller.signal })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         return res.json();
  //       } else {
  //         return Promise.reject(res);
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setTodos(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       if (error.name === 'AbortError') return;
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  //   }

  //     return () => {
  //       controller.abort();
  //     };
  //   }, []);
  useEffect(() => {
    setError(null);
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchTodos = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(`Api call was not ok ${response.status}`);
        }
        const result = await response.json();
        console.log('here');
        setTodos(result);
      } catch (error) {
        console.log(error);
        console.log(signal.aborted);
        if (error.name === 'AbortError') {
          return;
        }
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();

    return () => {
      // controller.abort();
    };
  }, []);

  let jsx;
  if (isLoading) {
    jsx = <h2>Loading ...</h2>;
  } else if (error != null) {
    jsx = <h2>Error {error}</h2>;
  } else {
    jsx = todos.map((todo, index) => {
      return (
        <li key={index}>
          {todo.title} - completed: {todo.completed ? 'yes' : 'no'}
        </li>
      );
    });
  }

  return <ul>{jsx}</ul>;
}

export default App;
