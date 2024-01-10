import React from 'react';
import { Link, useParams } from 'react-router-dom';
import teamMembers from './teamMembers.json';

export default function TeamMember() {
  const { memberId } = useParams();
  const member = teamMembers.find((member) => member.id === memberId);
  return (
    <>
      <div>{member.name}</div>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}
