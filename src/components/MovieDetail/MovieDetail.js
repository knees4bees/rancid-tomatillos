import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({details}) => {
  return (
    <div className='movie-detail'>
      <section className='movie-card__details' >
        <img src={details.poster__path} />
        <h2>{details.title}</h2>
        <p>{details.average_rating}</p>
        <p>{details.tagline}</p>
        <p>{details.genres}</p>
        <p>{details.overview}</p>
        <p>{details.runtime}</p>
        <p>{details.release_date}</p>
      </section>
      <div className='movie-backdrop'>
        <img className='movie-backdrop__image' src={details.backdrop_path} alt={details.title}/>
      </div>
    </div>
  )
}

export default MovieDetail;