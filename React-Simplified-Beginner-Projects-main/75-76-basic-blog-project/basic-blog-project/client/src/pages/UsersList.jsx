import React from 'react';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card/Card';
import CardHeader from '../components/Card/CardHeader';
import CardBody from '../components/Card/CardBody';
import CardFooter from '../components/Card/CardFooter';

export default function Users() {
  const users = useLoaderData();

  return (
    <Container>
      <PageTitle title={'Users'} />
      <div className="card-grid">
        {users.map((user) => {
          return (
            <Card key={user.id}>
              <CardHeader header={user.name} />
              <CardBody>
                <p>Company name: {user.company.name}</p>
                <p>Email: {user.email}</p>
                <p>Website: {user.website}</p>
              </CardBody>
              <CardFooter btnUrl={`${user.id.toString()}`} />
            </Card>
          );
        })}
      </div>
    </Container>
  );
}
