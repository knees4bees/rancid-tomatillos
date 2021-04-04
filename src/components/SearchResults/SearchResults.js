import React from 'react';
import Movies from '../Movies/Movies';

const SearchResults = ({ movies }) => {
  return (
    <main className="search-page">
      <h1>Search results</h1>
      <Movies movies={movies} />
    </main>
  );
};

export default SearchResults;
