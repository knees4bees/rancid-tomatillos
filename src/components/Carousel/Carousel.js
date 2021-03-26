import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './Carousel.css'
import Hero from '../Hero/Hero.js'

const Carousel = ({movies}) => {
  let featuredFilms = [];

  if (movies.length) {
    featuredFilms = movies.slice(10, 15).map(movie => {
      return (
        <Hero 
          title={movie.title} 
          image={movie.backdrop_path} 
          key={movie.id}
          id={movie.id}
        />
      )
    })
  } else {
    featuredFilms.push(<div className='hero__placeholder' key='hero-placeholder'></div>);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplaySpeed: 7000,
    // autoplay: true
  };

  return (
    <div className='carousel'>
      <Slider {...settings}>        
          {featuredFilms}       
      </Slider>
    </div>
  );
  
}

export default Carousel;