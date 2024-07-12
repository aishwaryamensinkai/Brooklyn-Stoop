import React from "react";
import Carousel from "./Carousel";
import CountDown from "./CountDown";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="carrousel_wrapper">
        <Carousel />
        <div className="artist_name">
          <div className="wrapper">
            Garage Sale <br />
            of the Year
          </div>
        </div>
      </div>
      <CountDown />
    </div>
  );
};

export default Featured;
