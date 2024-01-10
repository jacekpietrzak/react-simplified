import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from '../helpers/navigation';

export default function Navbar() {
  return (
    <nav className="top-nav">
      <div className="nav-text-large">Logo</div>
      <ul className="nav-list">
        {navigation.map((element) => {
          return (
            <NavLink key={element.id} to={element.url}>
              {element.name}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}
