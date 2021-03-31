import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import getAllMovies, { getSelectedMovie, handleErrors } from './utilities';
import Error from './components/Error/Error';
import Main from './components/Main/Main';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      // selectedMovieDetails: {},
      fetchStatus: 0,
      fetchError: false
    };
  }

  updateFetchStatus = (status) => {
    return this.setState({ fetchStatus: status });
  }

  updateFetchError = (error) => {
    return this.setState({ fetchError: error });
  }

  componentDidMount = () => {
    getAllMovies()
      .then((response) => {
        this.setState({ fetchStatus: response.status });
        return handleErrors(response);
      })
      .then((movieFetchData) => this.setState({ movies: movieFetchData.movies }))
      .catch(() => this.setState({ fetchError: true }));
  }

  displayMovieDetail = (id) => {
    // display placeholder?
    // getSelectedMovie(id)
    //   .then((response) => {
    //     this.setState({ fetchStatus: response.status });
    //     return handleErrors(response);
    //   })
    //   .then((movieData) => this.setState({ selectedMovieDetails: movieData.movie }))
    //   .catch(() => this.setState({ fetchError: true }))
      // .then(this.setState({ fetchError: true, fetchStatus: 404 })) //to test errors on click
  }

  resetHome = () => {
    this.setState({
      fetchError: false,
      fetchStatus: 0
    });
  }

  renderError = (fetchStatus) => {
    let message;

    switch (fetchStatus) {
      case 0:
        message = 'Oops! Something went wrong. Please check your internet connection.';
        break;
      case 404:
        message = 'Page not found.';
        break;
      case 422:
        message = 'Invalid request.';
        break;
      default:
        message = 'Oops! Something went wrong. Please try again.';
    }

    return (
      <Error message={message} />
    );
  }

  render() {
    return (
      <div>
        <Nav resetHome={this.resetHome} />
        <Switch>
          <Route exact path="/">
            <Main
              movies={this.state.movies}
              displayMovieDetail={this.displayMovieDetail}
            />
          </Route>
          <Route path="/:id" render={({ match }) => {
            const id = parseInt(match.params.id);
            const matchedMovie = this.state.movies.find(movie => movie.id === id);

            const selectedMovie = this.state.movies.length ? matchedMovie : { id: id };

            return (<MovieDetail 
              {...selectedMovie} 
              updateFetchStatus={this.updateFetchStatus} 
              updateFetchError={this.updateFetchError} 
            />)
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
