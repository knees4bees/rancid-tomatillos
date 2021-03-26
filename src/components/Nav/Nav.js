import React from 'react';
import homeIcon from '../../home.svg';
import searchIcon from '../../search.svg';
import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <button className='nav-bar__home' >
        <img src={homeIcon} className='nav-bar__home--img' tabIndex='0' />
      </button>
      <h1 className='nav-bar__header' >Rancid Tomatillos</h1>
      <img src={searchIcon} className='nav-bar__search' />
    </nav>
  )
}

export default Nav;