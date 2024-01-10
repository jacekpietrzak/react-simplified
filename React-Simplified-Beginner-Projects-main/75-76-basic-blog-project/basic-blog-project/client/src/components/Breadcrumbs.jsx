import React from 'react';
import Container from './Container';
import { Link, useMatches, useNavigate } from 'react-router-dom';

export default function Breadcrumbs() {
  const matches = useMatches();
  const navigate = useNavigate();

  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          style={{ border: 'none', cursor: 'pointer', fontSize: 'inherit' }}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <ul
          style={{
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'row',
            gap: '.5rem',
          }}
        >
          {crumbs.map((crumb, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                listStyle: 'none',
                gap: '.5rem',
              }}
            >
              <span>/</span>
              {crumb}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
