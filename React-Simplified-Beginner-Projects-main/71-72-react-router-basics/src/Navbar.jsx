import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
          <Link to={`/`}>home</Link>
        </li>
        <li>
          <Link to={`/about`}>about</Link>
        </li>
        <li>
          <Link to={`/store`}>store</Link>
        </li>
        <li>
          <Link to={`/team`}>team</Link>
        </li>
      </ul>
    </nav>
  );
}
