import React from 'react';
import { NavLink } from 'react-router-dom';

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
          <NavLink to={`/`}>home</NavLink>
        </li>
        <li>
          <NavLink to={`/about`}>about</NavLink>
        </li>
        <li>
          <NavLink to={`/store`}>store</NavLink>
        </li>
        <li>
          <NavLink to={`/team`}>team</NavLink>
        </li>
      </ul>
    </nav>
  );
}
