import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import getAllMovies, { handleErrors } from '../../utilities';
import Error from '../Error/Error';
import Main from '../Main/Main';
import MovieDetail from '../MovieDetail/MovieDetail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      fetchStatus: 200,
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
      .catch(() => this.setState({ fetchError: true }));
  }

  resetHome = () => {
    this.setState({
      fetchError: false,
      fetchStatus: 200
    });
  }

  // renderError = (fetchStatus) => {
  //   let message;

  //   switch (fetchStatus) {
  //     case 0:
  //       message = 'Oops! Something went wrong. Please check your internet connection.';
  //       break;
  //     case 404:
  //       message = 'Page not found.';
  //       break;
  //     case 422:
  //       message = 'Invalid request.';
  //       break;
  //     default:
  //       message = 'Oops! Something went wrong. Please try again.';
  //   }

  //   return (
  //     <Error message={message} />
  //   );
  // }

  render() {
    const { movies } = this.state;

    if (this.state.fetchStatus !== 200) {
      return <Redirect to="/error" />
    }

    return (
      <div>
        <Nav resetHome={this.resetHome} />
        <Switch>
          <Route exact path="/" render={() => <Main movies={movies} />} />
          <Route
            exact path="/movies/:id"
            render={({ match }) => {
              const id = parseInt(match.params.id, 10);
              const matchedMovie = movies.find((movie) => movie.id === id);

              const selectedMovie = movies.length ? matchedMovie : { id };

              return (
                <MovieDetail
                  {...selectedMovie}
                  updateFetchStatus={(key, value) => this.setState({ [key]: value })}
                />
              );
            }}
          />
          <Route path="/error" render={() => <Error fetchStatus={this.state.fetchStatus} />} />
          <Route path="/" render={() => <Error message={'Sorry, we couldn\'t find that page.'} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
