import React from 'react';
import Movies from '../Movies/Movies';
import './SearchResults.css';

const SearchResults = ({ movies }) => {
  return (
    <main className="search-page">
      <h1 className="search-page__header">{movies.length ? 'Search results' : 'Sorry no results found'}</h1>
      {movies.length ? <Movies movies={movies} /> : null}
    </main>
  );
};

export default SearchResults;
