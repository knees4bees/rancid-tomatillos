import React, { Component } from "react";
import Slider from "react-slick";
import "/Users/stevenmancine/turing/mod3/projects/rancid-tomatillos/node_modules/slick-carousel/slick/slick.css"; 
import "/Users/stevenmancine/turing/mod3/projects/rancid-tomatillos/node_modules/slick-carousel/slick/slick-theme.css";
import './Carousel.css'
import Hero from '../Hero/Hero.js'

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      autoplay: true
    };
    return (
      <div>
        <Slider {...settings}>        
            <Hero />        
            <Hero />        
        </Slider>
      </div>
    );
  }
}

export default Carousel;