import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom'

const Hero = ({ title, image, id }) => {
  return (
    <Link to={`/${id}`}  tabIndex="0">
      <div className="hero">
        <img className="hero__img" src={image} alt={title} />
        <p className="hero__title">{title}</p>
      </div>
    </Link>
  );
};

export default Hero;
