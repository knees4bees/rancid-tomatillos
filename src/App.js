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
      selectedMovie: 0,
    }
  } 

  displayMovieDetail = (id) => {
    console.log(id);
    this.setState({ selectedMovie: id })
  }

  render() {
    return (
      <div>
        <Nav />
        {!this.state.selectedMovie && 
          <main className='home-page'>
            <Carousel movies={this.state.movies} displayMovieDetail={this.displayMovieDetail}/>
            <Movies movies={this.state.movies} displayMovieDetail={this.displayMovieDetail}/>
          </main>
        }
        {this.state.selectedMovie && 
          <main className='detail-page'>
            {/* <MovieDetail id={this.state.selectedMovie}/> */}
          </main>
        }
      </div>
    );
  }
}

export default App;
