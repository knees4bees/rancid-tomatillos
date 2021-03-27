import { buildQueries } from '@testing-library/dom';
import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({details}) => {
  const percentage = details.average_rating / 10 * 100
  const ratingStyle = {
    background: `linear-gradient(to right, #ffd000 ${percentage}%, #cfe2f7d8 ${percentage}%, #d0e2f7d8 100%)`
  }
  
  return (
    <div className='movie-detail'>
      <section className='movie-card__details' >
        <img src={details.poster_path} className="movie-card__details__poster" />
        <h2 className='movie-card__details__title' >{details.title}</h2>
        <h3 className='movie-card__details__date' >{details.release_date.split('-')[0]}</h3>
        <div className='movie-card__details__rating' 
          style={ratingStyle}
        >
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div><br/>
        <p className='movie-card__details__run-time' >{details.runtime} min</p>
        <p className='movie-card__details__genre' >{details.genres}</p>
        <p className='movie-card__details__overview' >{details.overview}</p>
        <p className='movie-card__details__tagline' >{details.tagline}</p>
      </section>
      <div className='movie-backdrop'>
        <img className='movie-backdrop__image' src={details.backdrop_path} alt={details.title}/>
      </div>
    </div>
  )
}

export default MovieDetail;