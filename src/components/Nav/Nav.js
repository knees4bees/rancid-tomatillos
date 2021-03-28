import React from 'react';
import homeIcon from '../../home.svg';
import searchIcon from '../../search.svg';
import './Nav.css';

const Nav = ({ resetHome }) => {
  return (
    <nav className="nav-bar">
      <button className="nav-bar__home" onClick={resetHome}>
        <img className="nav-bar__home--img" src={homeIcon} alt="home icon" />
      </button>
      <h1 className="nav-bar__header">Rancid Tomatillos</h1>
      <img className="nav-bar__search" src={searchIcon} alt="search icon" />
    </nav>
  );
};

export default Nav;
