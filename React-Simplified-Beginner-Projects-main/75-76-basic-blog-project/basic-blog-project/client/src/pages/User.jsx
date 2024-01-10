import React from 'react';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import { useLoaderData } from 'react-router-dom';
import PageSubtitle from '../components/PageSubtitle';
import Card from '../components/Card/Card';
import CardHeader from '../components/Card/CardHeader';
import CardBody from '../components/Card/CardBody';
import CardPreviewText from '../components/Card/CardPreviewText';
import CardFooter from '../components/Card/CardFooter';

export default function User() {
  const { user, posts, todos } = useLoaderData();

  return (
    <Container>
      <PageTitle title={user.name} />
      <PageSubtitle>
        <div className="page-subtitle">{user.email}</div>
      </PageSubtitle>
      <div>
        <b>Company: </b>
        {user.company.name}
      </div>
      <div>
        <b>Website: </b>
        {user.website}
      </div>
      <div>
        <b>Address: </b>
        {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
      </div>
      <h3 className="mt-4 mb-2">{user.name}'s posts</h3>
      <div className="card-grid">
        {posts.map((post) => {
          return (
            <Card key={post.id}>
              <CardHeader header={post.title} />
              <CardBody>
                <CardPreviewText>
                  <p>{post.body}</p>
                </CardPreviewText>
              </CardBody>
              <CardFooter btnUrl={`/posts/${post.id.toString()}`} />
            </Card>
          );
        })}
      </div>
      <h3 className="mt-4 mb-2">{user.name}'s todos</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span className={todo.completed ? 'strike-through' : null}>
                {todo.title}
              </span>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
