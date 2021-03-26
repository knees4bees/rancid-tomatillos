import React from 'react';
import './Hero.css';

const Hero = ({title, image, displayMovieDetail, id}) => {
  return (
    <div className='hero' onClick={() => {displayMovieDetail(id)}}>
      <img className='hero__img' src={image} alt={title}/>
      <p className='hero__title'>{title}</p>
    </div>
  )
}

export default Hero;