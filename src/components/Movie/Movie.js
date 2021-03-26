import React from 'react';
import './Movie.css';

const Movie = ({ poster, id, displayMovieDetail }) => {
  return (
    <button className='movie' onClick={() => displayMovieDetail(id)}>
      <img src={poster} className='movie__poster'/>
    </button>
  )
}

export default Movie;