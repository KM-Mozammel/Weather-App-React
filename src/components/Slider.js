import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const weatherImages = [
  'https://imengine.public.prod.cmg.infomaker.io/?uuid=84860344-c8d8-51ee-b191-943a4ff8b68d&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.99999&width=1200&height=675&x=1.0E-5&y=1.0E-5',
  'https://s7d2.scene7.com/is/image/TWCNews/heavy_rain_jpg-6',
  'https://images.squarespace-cdn.com/content/v1/60332279321c6f6cc87cf8fe/1621003668935-XVMBRHD3NES5DFR89T6J/A+Dark%2C+Cloudy%2C+Gloomy+Sky',
  'https://static01.nyt.com/images/2017/07/19/us/19lightningbox/merlin-to-scoop-124775321-430935-superJumbo.jpg'
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ width: '80%', height: '250px', margin: 'auto', mt: 1, border: '1px solid skyblue'}}>
      <Slider {...settings}>
        {weatherImages.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`weather-${index}`} style={{ width: '100%', height: '250px'}} />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderComponent;
