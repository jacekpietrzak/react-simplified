import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export default function TeamMember() {
  const member = useLoaderData();
  return (
    <>
      <div>{member.name}</div>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}
