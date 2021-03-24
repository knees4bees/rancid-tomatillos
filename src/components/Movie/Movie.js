import React from 'react';
import './Movie.css';

const Movie = ({ poster }) => {
  return (
    <div className='movie'>
      <img src={poster} className='movie__poster'/>
    </div>
  )
}

export default Movie;