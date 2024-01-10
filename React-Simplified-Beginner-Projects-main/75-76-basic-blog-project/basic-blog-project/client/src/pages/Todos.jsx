import React from 'react';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import { useLoaderData } from 'react-router-dom';

export default function Todos() {
  const todos = useLoaderData();

  return (
    <Container>
      <PageTitle title={'Todos'} />
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span className={todo.completed ? 'strike-through' : undefined}>
                {todo.title}
              </span>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
