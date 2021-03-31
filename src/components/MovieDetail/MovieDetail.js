import React, { Component } from 'react';
import './MovieDetail.css';
import { BsPlayFill } from 'react-icons/bs';
import { getSelectedMovie, handleErrors } from '../../utilities';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  componentDidMount = () => {
    const { id } = this.state;

    getSelectedMovie(id)
      .then((response) => {
        this.props.updateFetchStatus('fetchStatus', response.status);
        return handleErrors(response);
      })
      .then((movieData) => this.setState({ ...movieData.movie }))
      .catch(() => this.props.updateFetchStatus('fetchError', true));
  }

  render() {
    const {
      average_rating,
      title,
      release_date,
      tagline,
      runtime,
      genres,
      overview,
      backdrop_path,
      poster_path
    } = this.state;
    const percentage = average_rating * 10;
    const ratingStyle = {
      background: `linear-gradient(to right, #ffd000 ${percentage}%, #cfe2f7d8 ${percentage}%)`
    };

    return (
      <main className="movie-detail">
        <section className="movie-card__details">
          <img src={poster_path} className="movie-card__details__poster" />
          <h2 className="movie-card__details__title">{title}</h2>
          <h3 className="movie-card__details__date">{release_date?.split('-')[0]}</h3>
          <div
            className="movie-card__details__rating"
            style={ratingStyle}
          >
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
          <br />
          <p className="movie-card__details__tagline">{tagline}</p>
          <p className="movie-card__details__run-time">{runtime} min</p>
          <p className="movie-card__details__genre">{genres?.join(', ')}</p>
          <p className="movie-card__details__overview">{overview}</p>
          <button className="movie-card__details__btn"><BsPlayFill className="icon" />Watch Trailer</button>
        </section>
        <div className="movie-backdrop">
          <img className="movie-backdrop__image" src={backdrop_path} alt={title} />
        </div>
      </main>
    );
  }
}

export default MovieDetail;
