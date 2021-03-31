import React from 'react';
import './Hero.css';

const Hero = ({ title, image }) => {
  return (
    <div className="hero" tabIndex="0">
      <img className="hero__img" src={image} alt={title} />
      <p className="hero__title">{title}</p>
    </div>
  );
};

export default Hero;
