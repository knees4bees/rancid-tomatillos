import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

const Movie = ({ poster, title, id }) => {
  return (
    <Link to={`/movies/${id}`} className="movie">
      <img className="movie__poster" src={poster} alt={title} />
    </Link>
  );
};

export default Movie;
