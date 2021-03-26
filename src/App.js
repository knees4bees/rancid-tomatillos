import React, { Component } from 'react';
import './App.css';
import movieData from './mock-data';
import Nav from './components/Nav/Nav.js';
import Movies from './components/Movies/Movies.js';
import Carousel from './components/Carousel/Carousel.js';
import fakeMovieDetailData from './fake-movie-detail-data.js';
import MovieDetail from './components/MovieDetail/MovieDetail.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      // movies: [],
      selectedMovieDetails: {},
    }
  } 

  displayMovieDetail = (id) => {
    // fetch(id) 
    // ... returns detail data
    this.setState({ selectedMovieDetails: fakeMovieDetailData.movie });
  }

  resetHome = () => {
    this.setState({ selectedMovieDetails: {} });
  }

  render() {
    return (
      <div>
        <Nav resetHome={this.resetHome} />
        {!this.state.selectedMovieDetails.id && 
          <main className='home-page'>
            <Carousel movies={this.state.movies} displayMovieDetail={this.displayMovieDetail}/>
            <Movies movies={this.state.movies} displayMovieDetail={this.displayMovieDetail}/>
          </main>
        }
        {this.state.selectedMovieDetails.id && 
          <main className='detail-page'>
            <MovieDetail details={this.state.selectedMovieDetails} />
          </main>
        }
      </div>
    );
  }
}

export default App;
