import React, { Component } from 'react';
import './MovieDetail.css';
import { BsPlayFill } from 'react-icons/bs';
import { getSelectedMovie, handleErrors } from '../../utilities';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.selectedMovie,
      updateFetchStatus: props.updateFetchStatus,
      updateFetchError: props.updateFetchError,
    };
  }

  componentDidMount = () => {
    console.log('MovieDetail component mounted')
    getSelectedMovie(this.state.id)
      .then((response) => {
        this.state.updateFetchStatus(response.status);
        return handleErrors(response);
      })
      .then((movieData) => this.setState({...movieData.movie}))
      .catch(() => this.state.updateFetchError(true))
  }

  render() {
    const percentage = this.state.average_rating * 10;
    const ratingStyle = {
      background: `linear-gradient(to right, #ffd000 ${percentage}%, #cfe2f7d8 ${percentage}%)`
    };

    return (
      <main className="movie-detail">
        <section className="movie-card__details">
          <img src={this.state.poster_path} className="movie-card__details__poster" />
          <h2 className="movie-card__details__title">{this.state.title}</h2>
          <h3 className="movie-card__details__date">{this.state.release_date?.split('-')[0]}</h3>
          <div
            className="movie-card__details__rating"
            style={ratingStyle}
          >
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <br />
          {/* <p className="movie-card__details__tagline">{this.state?.tagline}</p> */}
          {/* <p className="movie-card__details__run-time">{this.state?.runtime} min</p> */}
          {/* <p className="movie-card__details__genre">{this.state?.genres}</p> */}
          {/* <p className="movie-card__details__overview">{this.state?.overview}</p> */}
          <button className="movie-card__details__btn"><BsPlayFill className="icon" />Watch Trailer</button>
        </section>
        <div className="movie-backdrop">
          <img className="movie-backdrop__image" src={this.state.backdrop_path} alt={this.state.title}/>
        </div>
      </main>
    );
  }
}


// ({ title, release_date, poster_path, backdrop_path, id, average_rating }) => {
// };

export default MovieDetail;
