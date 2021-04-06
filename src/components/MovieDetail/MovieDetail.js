import React, { Component } from 'react';
import './MovieDetail.css';
import { BsPlayFill } from 'react-icons/bs';
import { getSelectedMovie, handleErrors, getTrailerKey } from '../../APICalls';
import { formatDate, formatGenres } from '../../utilities';
import Trailer from '../Trailer/Trailer';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      averageRating: props.average_rating,
      backdrop: props.backdrop_path,
      poster: props.poster_path,
      title: props.title,
      releaseDate: formatDate(props.release_date),
      trailerKey: '',
      displayTrailer: false
    };
  }

  componentDidMount = () => {
    const { id } = this.state;

    getSelectedMovie(id)
      .then((response) => {
        this.props.updateFetchStatus('fetchStatus', response.status);
        return handleErrors(response);
      })
      .then((movieData) => {
        const { movie } = movieData;
        this.setState({
          id: movie.id,
          averageRating: movie.average_rating,
          backdrop: movie.backdrop_path,
          poster: movie.poster_path,
          title: movie.title,
          releaseDate: formatDate(movie.release_date),
          overview: movie.overview,
          runtime: movie.runtime,
          tagline: movie.tagline,
          genres: formatGenres(movie.genres)
        });
      })
      .catch(() => this.props.updateFetchStatus('fetchError', true));
    getTrailerKey(id)
      .then(data => data.videos?.length && this.setState({ trailerKey: data.videos[0].key }));
  }

  toggleTrailer = () => {
    this.setState({ displayTrailer: !this.state.displayTrailer });
  }

  render() {
    const {
      averageRating,
      title,
      releaseDate,
      tagline,
      runtime,
      genres,
      overview,
      backdrop,
      poster,
      trailerKey
    } = this.state;

    const percentage = averageRating * 10;
    const ratingStyle = {
      background: `linear-gradient(to right, #ffd000 ${percentage}%, #cfe2f7d8 ${percentage}%)`
    };

    return (
      <>
        <main className="movie-detail">
          <section className="movie-card__details">
            <img src={poster} className="movie-card__details__poster" alt={title}/>
            <h2 className="movie-card__details__title">{title}</h2>
            <h3 className="movie-card__details__date">{releaseDate}</h3>
            <div
              className="movie-card__details__rating fa fa-star"
              style={ratingStyle}
            />
            <br />
            <p className="movie-card__details__tagline">{tagline}</p>
            <p className="movie-card__details__run-time">{runtime} min</p>
            <p className="movie-card__details__genre">{genres}</p>
            <p className="movie-card__details__overview">{overview}</p>
            {trailerKey &&
              (<button
                className="movie-card__details__btn"
                onClick={this.toggleTrailer}
              >
                <BsPlayFill className="icon" />
                Watch Trailer
              </button>)
            }
          </section>
          <div className="movie-backdrop">
            <img className="movie-backdrop__image" src={backdrop} alt={title} />
          </div>
        </main>
        {this.state.displayTrailer && <Trailer trailerKey={trailerKey} toggleTrailer={this.toggleTrailer} />}
      </>
    );
  }
}

export default MovieDetail;
