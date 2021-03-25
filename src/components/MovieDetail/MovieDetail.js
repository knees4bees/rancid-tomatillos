import React from 'react'

const MovieDetail = ({details}) => {
  return (
    <div className='movie-detail'>
      <img src={details.backdrop_path}/>
      <h2>{details.title}</h2>
      <p>{details.average_rating}</p>
      <p>{details.tagline}</p>
      <p>{details.genres}</p>
      <p>{details.overview}</p>
      <p>{details.runtime}</p>
      <p>{details.release_date}</p>
    </div>
  )
}

export default MovieDetail;