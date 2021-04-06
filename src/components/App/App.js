import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import getAllMovies, { handleErrors } from '../../APICalls';
import Error from '../Error/Error';
import Main from '../Main/Main';
import MovieDetail from '../MovieDetail/MovieDetail';
import SearchResults from '../SearchResults/SearchResults';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
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
      .catch(() => this.setState({ fetchError: true, filteredMovies: [] }));
  }

  resetHome = () => this.setState({ fetchError: false });

  search = (searchTerm) => {
    const searchTerms = searchTerm.toLowerCase().split(' ').filter((term) => term);

    let matches = [];
    searchTerms.forEach((term) => {
      const newMatches = this.state.movies.filter((movie) => movie.title.toLowerCase().includes(term));
      matches = [...matches, ...newMatches];
    });
    const finalMatches = [...new Set(matches)];
    this.setState({ filteredMovies: finalMatches });
  };

  render() {
    const { movies, fetchError, fetchStatus, filteredMovies } = this.state;

    return (
      <div className="app">
        <Nav resetHome={this.resetHome} search={this.search} />
        {fetchError && <Redirect to="/error" fetchStatus={fetchStatus} />}
        <Switch>
          <Route exact path="/" render={() => <Main movies={movies} />} />
          <Redirect exact from="/movies" to="/" />
          <Route exact path="/search" render={() => <SearchResults movies={filteredMovies} />} />
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
