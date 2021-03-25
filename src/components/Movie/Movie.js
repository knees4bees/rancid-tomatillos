import React from 'react';
import './Movie.css';

const Movie = ({ poster, id, displayMovieDetail }) => {
  return (
    <div className='movie' onClick={() => displayMovieDetail(id)}>
      <img src={poster} className='movie__poster'/>
    </div>
  )
}

export default Movie;