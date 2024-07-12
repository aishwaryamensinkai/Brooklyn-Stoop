import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      {/* Embedded Google Maps iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6707525331663!2d-73.99899538459448!3d40.676693947927354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a184bbd03cf%3A0x290e9f4e5d76e5c9!2s2nd%20Pl%20%26%20Court%20St%2C%20Brooklyn%2C%20NY%2011231!5e0!3m2!1sen!2sus!4v1537074732903"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
        title="Brooklyn Location"
      />
      {/* Location tag */}
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
