import React from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import Hero from '../Hero/Hero';

const Carousel = ({ movies }) => {
  const featuredFilms = movies.slice(15, 20).map((movie) => {
    const { id, title, backdrop_path } = movie
    return (
      <Hero
        title={title}
        image={backdrop_path}
        key={id}
        id={id}
      />
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
