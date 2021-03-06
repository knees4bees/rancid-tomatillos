import React from 'react';
import './Trailer.css';

const Trailer = ({ trailerKey, toggleTrailer }) => {
  return (
    <div className="trailer">
      <div className="trailer__container">
        <button className="exit-btn" onClick={toggleTrailer}>&times;</button>
        <iframe className="iframe" src={`https://www.youtube.com/embed/${trailerKey}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      </div>
    </div>
  );
};

export default Trailer;
