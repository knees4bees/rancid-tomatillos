import React from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/home.svg';
import Search from '../Search/Search';
import './Nav.css';

const Nav = ({ resetHome, search }) => {
  return (
    <nav className="nav-bar">
      <NavLink exact to="/" className="nav-bar__home" onClick={resetHome} activeStyle={{ visibility: 'hidden' }}>
        <img className="nav-bar__home--img" src={homeIcon} alt="home icon" />
      </NavLink>
      <h1 className="nav-bar__header">Rancid Tomatillos</h1>
      <Search search={search} />
    </nav>
  );
};

export default Nav;
