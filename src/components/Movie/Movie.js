import React from 'react';
import './Movie.css';

const Movie = ({ poster, title, id, displayMovieDetail }) => {
  return (
    <button className='movie' onClick={() => displayMovieDetail(id)}>
      <img className='movie__poster' src={poster} alt={title} />
    </button>
  )
}

export default Movie;