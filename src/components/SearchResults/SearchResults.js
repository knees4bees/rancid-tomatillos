import React from 'react';
import Movies from '../Movies/Movies';

const SearchResults = ({ movies, search }) => {
  return (
    <main className="search-page">
      <h1 className="Search-page__Header">Search results</h1>
      <Movies movies={movies} />
    </main>
  );
};

export default SearchResults;
