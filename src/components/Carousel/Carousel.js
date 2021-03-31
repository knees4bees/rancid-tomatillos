import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import Hero from '../Hero/Hero';

const Carousel = ({ movies }) => {
  const featuredFilms = movies.slice(10, 15).map((movie) => {
    return (
      <Link to={`/${movie.id}`} key={movie.id}>
        <Hero
          title={movie.title}
          image={movie.backdrop_path}
          key={movie.id}
        />
      </Link>
    );
  });

  const placeholder = <div className="hero__placeholder" key="hero-placeholder" />;

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplaySpeed: 10000,
    // autoplay: true
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {movies.length ? featuredFilms : placeholder}
      </Slider>
    </div>
  );
};

export default Carousel;
