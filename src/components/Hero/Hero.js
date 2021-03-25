import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <img className='hero__img' src='https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg' />
      <p className="hero__title">Hero Movie Title</p>
    </div>
  )
}

export default Hero;