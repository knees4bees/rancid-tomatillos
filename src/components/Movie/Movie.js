import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

const Movie = ({ poster, title, id, displayMovieDetail }) => {
  return (
    // <button className="movie" onClick={() => displayMovieDetail(id)}>
    <Link to={`/${id}`} onClick={() => displayMovieDetail(id)}>
      <img className="movie__poster" src={poster} alt={title} />
    </Link>
    // </button>
  );
};

export default Movie;
