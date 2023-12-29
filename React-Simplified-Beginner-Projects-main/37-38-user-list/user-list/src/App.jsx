import { useEffect, useState } from 'react';
import User from './User';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (response.status !== 200) {
          throw new Error(`Api call returned an error ${response.status}`);
        }
        const result = await response.json();

        setUsers(result);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1>User List</h1>

      {loading === true ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((user) => {
            // return <User key={user.id} name={user.name} />;
            return <User key={user.id} {...user} />;
          })}
        </ul>
      )}
    </>
  );
}
