import React from 'react';
import './Trailer.css'

const Trailer = ({ trailerKey, toggleTrailer }) => {
  return (
    <div className="trailer">
      <div className="trailer__container">
        <button className="exit-btn" onClick={toggleTrailer}>&times;</button>
        <iframe className="iframe" src={`https://www.youtube.com/embed/${trailerKey}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

// width="560" height="315"

export default Trailer;