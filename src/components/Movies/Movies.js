import React from 'react';
import Movie from '../Movie/Movie';
import './Movies.css';

const Movies = ({ movies }) => {
  let movieCards = [];

  if (movies.length) {
    movieCards = movies.map((movie) => (
      <Movie
        poster={movie.poster_path}
        title={movie.title}
        id={movie.id}
        key={movie.id}
      />
    ));
  } else {
    for (let i = 0; i < 5; i++) {
      movieCards.push(<div className="movie" key={i}><div className="movie__poster--placeholder" /></div>);
    }
  }

  return (
    <div className="movies-container">
      {movieCards}
    </div>
  );
};

export default Movies;
