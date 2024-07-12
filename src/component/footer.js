import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_black">
      {/* Fade-in effect for the footer content */}
      <Fade delay={800}>
        {/* Venue logo */}
        <div className="font_righteous footer_logo_venue"> Brooklyn Stoop</div>
        {/* Copyright notice with current year */}
        <div className="footer_copyright">
          All rights reserved
          <span> {new Date().getFullYear()}</span>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
