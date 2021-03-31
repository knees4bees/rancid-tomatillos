import React from 'react';
import Carousel from '../Carousel/Carousel';
import Movies from '../Movies/Movies';

const Main = ({ movies }) => {
  return (
    <main className="home-page">
      <Carousel movies={movies} />
      <Movies movies={movies} />
    </main>
  );
};

export default Main;
