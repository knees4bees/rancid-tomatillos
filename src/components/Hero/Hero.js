import React from 'react';
import './Hero.css';

const Hero = ({title, image}) => {
  return (
    <div className='hero'>
      <img className='hero__img' src={image} />
      <p className='hero__title'>{title}</p>
    </div>
  )
}

export default Hero;