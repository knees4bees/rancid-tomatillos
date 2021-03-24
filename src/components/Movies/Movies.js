import react from 'react';
import Movie from '../Movie/Movie.js';

const Movies = ({movies}) => {
  const movieCards = movies.map(movie => {
    <Movie 
      // need to pass some props here
    />
  });

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}

export default Movies;