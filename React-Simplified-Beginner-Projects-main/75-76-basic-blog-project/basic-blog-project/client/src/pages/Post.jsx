import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import PageSubtitle from '../components/PageSubtitle';

export default function Post() {
  const { post, user, comments } = useLoaderData();

  return (
    <Container>
      <PageTitle title={post.title} />
      <PageSubtitle>
        By: <Link to={`/users/${user.id}`}>{user.name}</Link>
      </PageSubtitle>
      <div>{post.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map((comment) => {
          return (
            <div className="card" key={comment.id}>
              <div className="card-body">
                <div className="text-sm mb-1">
                  {comment.email.toLowerCase()}
                </div>
                {comment.body}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
