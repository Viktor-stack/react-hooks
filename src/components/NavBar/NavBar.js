import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">
        GitHub Поиск
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={'/'} exact className="nav-link">Глвыная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/about'} className="nav-link">Инвшомацыя</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;