import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function ImageCarousel(props) {
  return (
    <Carousel autoplay showThumbs={false} infiteLoop={true}>
      <div>
        <img src={require('../img/renders/gundam-inspired.jpg')} />
      </div>
      <div>
        <img src={require('../img/renders/tactical_assassin_droid.jpg')} />
      </div>
      <div>
        <img src={require('../img/renders/heavy-gunner-prototype.jpg')} />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
