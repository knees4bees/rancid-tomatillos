import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Movies from './components/Movies/Movies';
import Carousel from './components/Carousel/Carousel';
import MovieDetail from './components/MovieDetail/MovieDetail';
import getAllMovies, { getSelectedMovie, handleErrors} from './utilities';
import Error from './components/Error/Error';

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
        return handleErrors(response);
      })
      .then((movieFetchData) => this.setState({ movies: movieFetchData.movies }))
      .catch(() => this.setState( {fetchError: true }));
  }

  displayMovieDetail = (id) => {
    // display placeholder?
    getSelectedMovie(id)
      .then((response) => {
        this.setState({ fetchStatus: response.status });
        return handleErrors(response);
      })
      .then((movieData) => this.setState({ selectedMovieDetails: movieData.movie }))
      .catch(() => this.setState( {fetchError: true }));
  }

  resetHome = () => {
    this.setState({ 
      selectedMovieDetails: {},
      fetchError: false,
      fetchStatus: 0
    });
  }

  render() {
    // return this.renderError(500); // To force render of error state

    if (this.state.fetchError) {
      return this.renderError(this.state.fetchStatus);
    }
    
    return (
      <div>
        <Nav resetHome={this.resetHome} />
        {!this.state.selectedMovieDetails.id
          && (
            <main className="home-page">
              <Carousel 
                movies={this.state.movies} 
                displayMovieDetail={this.displayMovieDetail} 
              />
              <Movies 
                movies={this.state.movies} 
                displayMovieDetail={this.displayMovieDetail} 
              />
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

  renderError = (fetchStatus) => {
    let message;

    switch (fetchStatus) {
      case 0: 
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
