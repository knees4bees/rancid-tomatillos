import React from 'react';
import Movie from '../Movie/Movie';
import './Movies.css';

const Movies = ({ movies, displayMovieDetail }) => {
  let movieCards = [];

  if (movies.length) {
    movieCards = movies.map((movie) => {
      return (
        <Movie
          poster={movie.poster_path}
          title={movie.title}
          id={movie.id}
          key={movie.id}
          displayMovieDetail={displayMovieDetail}
        />
      );
    });
  } else {
    for (let i = 0; i < 5; i++) {
      movieCards.push(<div className="movie" key={i}><div className="movie__poster--placeholder"></div></div>);
    }
  }

  return (
    <div className="movies-container">
      {/* {!movieCards.length < 1 && <div>boxes</div>} */}
      {movieCards}
    </div>
  );
};

export default Movies;