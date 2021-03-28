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
      selectedMovieDetails: {},
      fetchStatus: 0,
      fetchError: false
    };
  }

  componentDidMount = () => {
    getAllMovies()
      .then((response) => {
        this.setState({ fetchStatus: response.status });

        if (!response.ok) {
          throw new Error();
        }

        return response.json();
      })
      .then((movieFetchData) => this.setState({ movies: movieFetchData.movies }))
      .catch((err) => this.setState( {fetchError: true }));
  }

  displayMovieDetail = (id) => {
    // display placeholder?
    getSelectedMovie(id)
      .then((response) => {
        this.setState({ fetchStatus: response.status });

        if (!response.ok) {
          throw new Error();
        }

        return response.json();
      })
      .then((movieData) => this.setState({ selectedMovieDetails: movieData.movie }))
      .catch((err) => this.setState( {fetchError: true }));
  }

  resetHome = () => {
    this.setState({ selectedMovieDetails: {} });
  }

  render() {
    if (this.state.fetchError) {
      return this.renderError(this.state.fetchStatus);
    }

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

  renderError(fetchStatus) {
    let message;

    switch (fetchStatus) {
      case 0: // Fetch failed entirely (0 is initial status)
        message = 'Oops! Something went wrong. Please check your internet connection.'
        break;
      case 404:
        message = 'Page not found.'
        break;
      case 422:
        message = 'Invalid request.'
        break;
      default:
        message = 'Oops! Something went wrong. Please try again.';
    }

    return (
      <div>
        <Nav resetHome={this.resetHome} />
        <Error message={message} />
      </div>
    )
  }
}

export default App;
