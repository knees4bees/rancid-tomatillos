import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Movies from './components/Movies/Movies';
import Carousel from './components/Carousel/Carousel';
import MovieDetail from './components/MovieDetail/MovieDetail';
import getAllMovies, { getSelectedMovie } from './utilities';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovieDetails: {}
    };
  }

  componentDidMount = () => {
    getAllMovies()
      .then((movieFetchData) => this.setState({ movies: movieFetchData.movies }))
      .catch((err) => console.log(err));
  }

  displayMovieDetail = (id) => {
    // display placeholder?
    getSelectedMovie(id)
      .then((movieData) => this.setState({ selectedMovieDetails: movieData.movie }))
      .catch((err) => console.log(err));
  }

  resetHome = () => {
    this.setState({ selectedMovieDetails: {} });
  }

  render() {
    return (
      <div>
        <Nav resetHome={this.resetHome} />
        {!this.state.selectedMovieDetails.id
          && (
            <main className="home-page">
              <Carousel movies={this.state.movies} displayMovieDetail={this.displayMovieDetail} />
              <Movies movies={this.state.movies} displayMovieDetail={this.displayMovieDetail} />
            </main>
          )}
        {this.state.selectedMovieDetails.id
          && (
            <main className="detail-page">
              <MovieDetail details={this.state.selectedMovieDetails} />
            </main>
          )}
      </div>
    );
  }
}

export default App;
