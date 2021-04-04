import React, { Component } from 'react';
import './Search.css';
import { BiSearch } from 'react-icons/bi';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      isActive: false
    }
  }

  render() {
    return (
      <div className="search">
        <button className='search__button' onClick={this.handleClick}>
          <BiSearch className='nav-bar__search' />
        </button>
        <label>
         <input 
          className={this.state.isActive ? 'search__input--active' : 'search__input'}
          name='search' 
          placeholder='Search for you stuffs'
          value={this.state.search}
          
          />
        </label>
      </div>
    )
  }
}

export default Search;
