import React, { Component } from 'react';
import './App.css';
import movieData from './mock-data';
import Nav from './components/Nav/Nav.js';
import Hero from './components/Hero/Hero.js';
import Movies from './components/Movies/Movies.js';
import Carousel from './components/Carousel/Carousel.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
    }
  } 

  render() {
    return (
      <div>
        <Nav />
        <main>
          <Carousel movies={this.state.movies} />
          <Movies movies={this.state.movies} />
        </main>
      </div>
    );
  }
}

export default App;
