import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({details}) => {
  return (
    <div className='movie-detail'>
      <div className='movie-card'>
        <img className='movie-card__image' src={details.backdrop_path} alt={details.title}/>
        <section className='movie-card__details' >
          <h2>{details.title}</h2>
          <p>{details.average_rating}</p>
          <p>{details.tagline}</p>
          <p>{details.genres}</p>
          <p>{details.overview}</p>
          <p>{details.runtime}</p>
          <p>{details.release_date}</p>
        </section>
      </div>
    </div>
  )
}

export default MovieDetail;