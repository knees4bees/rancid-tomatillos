import './App.css';
import movieData from './mock-data';
import Nav from './components/Nav/Nav.js';
import Hero from './components/Hero/Hero.js';
// import Movies from './components/Movies/Movies.js';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        {/* <Movies /> */}
      </main>
    </div>
  );
}

export default App;
