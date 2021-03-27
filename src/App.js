import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import Movies from './components/Movies/Movies.js';
import Carousel from './components/Carousel/Carousel.js';
import MovieDetail from './components/MovieDetail/MovieDetail.js';
import getAllMovies, { getSelectedMovie } from './utilities.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovieDetails: {},
    }
  } 

  componentDidMount = () => {
    getAllMovies()
      .then(movieFetchData => this.setState({movies: movieFetchData.movies}))
  }

  displayMovieDetail = (id) => {
    // display placeholder?
    getSelectedMovie(id)
      .then(movieData => this.setState({selectedMovieDetails: movieData.movie}))
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
