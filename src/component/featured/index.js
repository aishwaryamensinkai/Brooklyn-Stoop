import React from "react";
import Carousel from "./Carousel";
import CountDown from "./CountDown";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* Wrapper for the carousel */}
      <div className="carousel_wrapper">
        {/* Render the Carousel component */}
        <Carousel />

        {/* Sale name overlay */}
        <div className="artist_name">
          <div className="wrapper">
            Garage Sale <br />
            of the Year
          </div>
        </div>
      </div>

      {/* Render the CountDown component */}
      <CountDown />
    </div>
  );
};

export default Featured;
