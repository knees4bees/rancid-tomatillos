import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({details}) => {
  return (
    <div className='movie-detail'>
      <section className='movie-card__details' >
        <img src={details.poster_path} className="movie-card__details__poster" />
        <h2 className='movie-card__details__title' >{details.title}</h2>
        <p className='movie-card__details__' >{details.average_rating}</p>
        <p className='movie-card__details__' >{details.tagline}</p>
        <p className='movie-card__details__' >{details.genres}</p>
        <p className='movie-card__details__' >{details.overview}</p>
        <p className='movie-card__details__' >{details.runtime}</p>
        <p className='movie-card__details__' >{details.release_date}</p>
      </section>
      <div className='movie-backdrop'>
        <img className='movie-backdrop__image' src={details.backdrop_path} alt={details.title}/>
      </div>
    </div>
  )
}

export default MovieDetail;