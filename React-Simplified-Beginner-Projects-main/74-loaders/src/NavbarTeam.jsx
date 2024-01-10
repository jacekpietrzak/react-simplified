import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export default function NavbarTeam() {
  const teamMembers = useLoaderData();
  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          listStyle: 'none',
          margin: '16px',
          padding: 0,
        }}
      >
        {teamMembers.map((member) => {
          return (
            <li key={member.id}>
              <Link to={member.id.toString()}>{member.name}</Link>
            </li>
          );
        })}
        <li key={'new'}>
          <Link to="new">New Member</Link>
        </li>
      </ul>
    </nav>
  );
}
