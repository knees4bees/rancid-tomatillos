import React, { Component } from 'react';
import './App.css';
import movieData from './mock-data';
import Nav from './components/Nav/Nav.js';
import Hero from './components/Hero/Hero.js';
import Movies from './components/Movies/Movies.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movieData.movies,
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <main>
          <Hero />
          <Movies movies={this.state.movies}/>
        </main>
      </div>
    );
  }
}

export default App;
