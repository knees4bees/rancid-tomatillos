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
      fetchError: false,
      cats: true
    };
  }

  componentDidMount = () => {
    getAllMovies()
      .then((response) => {
        console.log("response status: ", response.status);
        this.setState({ fetchStatus: response.status });
        console.log("fetchStatus in state: ", this.state.fetchStatus);
        return handleErrors(response);
      })
      .then((movieFetchData) => this.setState({ movies: movieFetchData.movies }))
      .catch(() => {
        this.setState({ fetchError: true });
        console.log('hey I got caught');
        <Redirect to='/error' />
      });
  }

  resetHome = () => this.setState({ fetchError: false });

  // redirect = () => {
  //   if (this.state.fetchError) {
  //     console.log("all the state: ", this.state);
  //     return <Redirect to='/error' />
  //   }
  // };

  render() {
    const { movies } = this.state;

    // if (this.state.fetchError) {
    //   console.log("all the state: ", this.state);
    //   <Redirect to="/error" />
    // }

    // if (this.state.cats) {
    //   console.log("all the state: ", this.state);
    //   return <Redirect to="/cats" />
    // }

    // this.redirect();

    return (
      <div>
        <Nav resetHome={this.resetHome} />
        <Switch>
          <Route 
            exact path="/"
            render={() => {
              if (this.state.fetchError) {
                return <Error fetchStatus={this.state.fetchStatus} />
              }
              return <Main movies={movies} />
            }} 
          />
          <Redirect exact from="/movies" to="/" />
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
          {/* <Route path="/error" render={() => <Error fetchStatus={this.state.fetchStatus} />} /> */}
          <Route render={() => <Error fetchStatus={this.state.fetchStatus} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
