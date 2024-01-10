import React from 'react';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card/Card';
import { useLoaderData } from 'react-router-dom';
import CardHeader from '../components/Card/CardHeader';
import CardBody from '../components/Card/CardBody';
import CardPreviewText from '../components/Card/CardPreviewText';
import CardFooter from '../components/Card/CardFooter';

export default function Posts() {
  const { users, posts } = useLoaderData();

  return (
    <Container>
      <PageTitle title={'Posts'} />
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
              <CardFooter
                user={users.find((user) => user.id === post.userId)}
                btnUrl={`${post.id.toString()}`}
              />
            </Card>
          );
        })}
      </div>
    </Container>
  );
}
