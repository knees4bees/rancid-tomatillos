import React from 'react';
import homeIcon from '../../home.svg';
import searchIcon from '../../search.svg';

const Nav = () => {
  return (
    <nav>
      <img src={homeIcon} />
      <h1>Rancid Tomatillos</h1>
      <img src={searchIcon} />
    </nav>
  )
}

export default Nav;