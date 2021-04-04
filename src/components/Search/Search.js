import React, { Component } from 'react';
import './Search.css';
import { BiSearch } from 'react-icons/bi';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      isActive: false
    }
  }

  handleClick = () => {
    this.state.searchTerm && this.props.search(this.state.searchTerm);
    this.clearInput();
    this.setState({isActive: !this.state.isActive});
  }

  handleChange = event => this.setState({searchTerm: event.target.value});

  handleKeyDown = event => event.key === 'Enter' && this.handleClick();

  clearInput = () => this.setState({searchTerm: ''})

  render() {
    return (
      <div className="search">
        <button className='search__button' onClick={this.handleClick}>
          <BiSearch className='nav-bar__search' />
        </button>
        <label>
        {this.state.isActive && 
          <input 
            className='search__input--active'
            name='searchTerm' 
            placeholder='Search by title'
            value={this.state.searchTerm}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            autoFocus
          />
        }
        </label>
      </div>
    )
  }
}

export default Search;
