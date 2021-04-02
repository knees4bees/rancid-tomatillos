import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import getAllMovies, { handleErrors } from '../../APICalls';
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

  resetHome = () => this.setState({ fetchError: false });

  render() {
    const { movies, fetchError, fetchStatus } = this.state;

    return (
      <div>
        <Nav resetHome={this.resetHome} />
        {fetchError && <Redirect to="/error" fetchStatus={fetchStatus} />}
        <Switch>
          <Route exact path="/" render={() => <Main movies={movies} />} />
          <Redirect exact from="/movies" to="/" />
          <Route
            exact
            path="/movies/:id"
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
          <Route render={() => <Error fetchStatus={fetchStatus} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
