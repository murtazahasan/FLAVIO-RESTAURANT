'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousels() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden h-auto">
      <Slider {...settings}>
        <div>
          <img
            src="/home22.png"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/home11.png"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/home33.png"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousels;
