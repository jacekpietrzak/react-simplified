import React from 'react';
import { Link } from 'react-router-dom';
import teamMembers from './teamMembers';

export default function NavbarTeam() {
  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          gap: '1rem',
          listStyle: 'none',
          margin: '16px',
          padding: 0,
        }}
      >
        {teamMembers.map((member) => {
          return (
            <li key={member.id}>
              <Link to={member.id}>{member.name}</Link>
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
