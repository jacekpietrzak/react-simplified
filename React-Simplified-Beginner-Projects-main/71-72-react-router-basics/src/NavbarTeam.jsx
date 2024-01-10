import React from 'react';
import { Link } from 'react-router-dom';

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
        <li>
          <Link to={`joe`}>Joe</Link>
        </li>
        <li>
          <Link to={`sally`}>Sally</Link>
        </li>
        <li>
          <Link to={`..`}>.. Route</Link>
          {/* by default relative to route */}
        </li>
        <li>
          <Link to=".." relative="path">
            .. Path
          </Link>
        </li>
      </ul>
    </nav>
  );
}
