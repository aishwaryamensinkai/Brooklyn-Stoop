import React from "react";
import Slider from "react-slick";
import slide1 from "../../resources/images/slide_one.jpg";
import slide4 from "../../resources/images/slide_four.jpg";
import slide2 from "../../resources/images/slide_two.jpg";
import slide3 from "../../resources/images/slide_three.jpg";
import slide5 from "../../resources/images/slide_five.jpg";
import slide6 from "../../resources/images/slide_six.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    autoplay: true,
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide1})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide2})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide3})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide4})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide5})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide6})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
