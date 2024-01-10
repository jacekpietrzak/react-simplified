import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamMember({ name }) {
  return (
    <>
      <div>{name}</div>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}
