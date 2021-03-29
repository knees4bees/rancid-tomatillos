import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

const Movie = ({ poster, title, id, displayMovieDetail }) => {
  return (
    <Link to={`/${id}`} className="movie" onClick={() => displayMovieDetail(id)}>
      <img className="movie__poster" src={poster} alt={title} />
    </Link>
  );
};

export default Movie;
