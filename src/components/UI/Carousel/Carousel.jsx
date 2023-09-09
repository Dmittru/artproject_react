import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: (3 + Math.floor(Math.random()*4)) * 1000,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="w-full h-full">
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full min-h-[650px] object-cover"
                        // ADD LG
                    />
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
