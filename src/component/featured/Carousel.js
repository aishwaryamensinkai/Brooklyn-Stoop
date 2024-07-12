import React from "react";
import Slider from "react-slick";
import slide1 from "../../resources/images/slide_one.jpg";
import slide2 from "../../resources/images/slide_two.jpg";
import slide3 from "../../resources/images/slide_three.jpg";
import slide4 from "../../resources/images/slide_four.jpg";
import slide5 from "../../resources/images/slide_five.jpg";
import slide6 from "../../resources/images/slide_six.jpg";

const Carousel = () => {
  // Settings for the carousel slider
  const settings = {
    dots: false, // Hide the dots navigation
    infinite: true, // Infinite looping of slides
    speed: 200, // Transition speed in milliseconds
    autoplay: true, // Autoplay slides
  };

  return (
    <div
      className="carousel_wrapper"
      style={{
        height: `${window.innerHeight}px`, // Set carousel height based on window height
      }}
    >
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide1})`, // Background image from imported file
              height: `${window.innerHeight}px`, // Match slide height to window height
            }}
          />
        </div>
        {/* Slide 2 */}
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide2})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        {/* Slide 3 */}
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide3})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        {/* Slide 4 */}
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide4})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        {/* Slide 5 */}
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${slide5})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        {/* Slide 6 */}
        <div>
          <div
            className="carousel_image"
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
