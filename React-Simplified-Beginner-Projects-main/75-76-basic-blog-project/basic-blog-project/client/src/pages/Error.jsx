import React from 'react';
import Container from '../components/Container';
import { useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Error() {
  const error = useRouteError();
  console.log('errorMsg:', error);
  return (
    <>
      <Navbar />
      <Container>
        <h1>Error - Something went wrong</h1>

        {error !== null && import.meta.env.MODE !== 'production' && (
          <>
            <h4>Status: {error.status}</h4>
            <h2>{error.statusText}</h2>
            <p>{error.error.message}</p>
            <p>{error.error.stack}</p>
          </>
        )}
      </Container>
    </>
  );
}
