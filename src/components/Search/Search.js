import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Search.css';
import { BiSearch } from 'react-icons/bi';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      isActive: false
    };
  }

  handleClick = () => {
    if (this.state.searchTerm) {
      this.props.search(this.state.searchTerm);
      this.props.history.push('/search');
    }
    this.setState({ isActive: !this.state.isActive });
    this.clearInput();
  }

  handleChange = (event) => this.setState({ searchTerm: event.target.value });

  handleKeyDown = (event) => {
    event.key === 'Enter' && this.handleClick();
  };

  clearInput = () => this.setState({ searchTerm: '' })

  render() {
    return (
      <div className="search">
        <label className="search-label">
          {this.state.isActive &&
            (<input
              type="text"
              className="search__input--active"
              name="searchTerm"
              placeholder="Search by title"
              value={this.state.searchTerm}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              autoFocus
            />)
          }
        </label>
        <button className="search__button" onClick={this.handleClick} aria-label="search">
          <BiSearch className="nav-bar__search" />
        </button>
      </div>
    );
  }
}

export default withRouter(Search);
