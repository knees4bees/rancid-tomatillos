import React from 'react';
import Carousel from '../Carousel/Carousel';
import Movies from '../Movies/Movies';
import MovieDetail from '../MovieDetail/MovieDetail';

const Main = ({ movies, displayMovieDetail }) => {
  // if (selectedMovie.id) {
  //   return (
  //     <MovieDetail details={selectedMovie} />
  //   );
  // }

  return (
    <main className="home-page">
      <Carousel
        movies={movies}
        displayMovieDetail={displayMovieDetail}
      />
      <Movies
        movies={movies}
        // displayMovieDetail={displayMovieDetail}
      />
    </main>
  );
};

export default Main;
