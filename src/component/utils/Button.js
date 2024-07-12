import React from "react";
import UIButton from "@material-ui/core/Button";

const Button = (props) => {
  return (
    <UIButton
      // Set the href for the button, defaults to "#" if not provided
      href={props.link ? props.link : "#"}
      variant="contained" // Button variant is contained
      size={props.size} // Size of the button (small, medium, large)
      style={{
        background: props.bck, // Background color of the button
        color: props.color, // Text color of the button
      }}
    >
      {/* Optional icon image */}
      <img src={props.img} alt={props.alt} className="iconImage" />
      {/* Button text or label */}
      {props.name}
    </UIButton>
  );
};

export default Button;
