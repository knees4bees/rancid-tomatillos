import React from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/home.svg';
import searchIcon from '../../assets/search.svg';
import './Nav.css';

const Nav = ({ resetHome }) => {
  return (
    <nav className="nav-bar">
      <NavLink exact to="/" className="nav-bar__home" onClick={resetHome} activeStyle={{visibility: "hidden"}}>
        <img className="nav-bar__home--img" src={homeIcon} alt="home icon" />
      </NavLink>
      <h1 className="nav-bar__header">Rancid Tomatillos</h1>
      <img className="nav-bar__search" src={searchIcon} alt="search icon" />
    </nav>
  );
};

export default Nav;
