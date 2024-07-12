import React from "react";
import Description from "./Description"; // Import Description component
import Discount from "./Discount"; // Import Discount component

const Highlights = () => {
  return (
    <div className="highlight_wrapper">
      {/* Render the Description component */}
      <Description />
      {/* Render the Discount component */}
      <Discount />
    </div>
  );
};

export default Highlights;
