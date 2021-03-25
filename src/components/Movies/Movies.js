import React from 'react';
import Movie from '../Movie/Movie.js';
import './Movies.css';

const Movies = ({movies}) => {
  const movieCards = movies.map(movie => {
    return (<Movie 
      poster={movie.poster_path} 
      id={movie.id}
      key={movie.id}
    />);
  });

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}

export default Movies;