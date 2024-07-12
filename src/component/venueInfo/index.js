import React from "react";
import Fade from "react-reveal/Fade";
import icon_calendar from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Fade duration={800}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_calendar})`,
                    }}
                  />
                </div>
                <div className="vn_title">Event Date & Time</div>
                <div className="vn_desc">
                  July 29th, 2024 <br />
                  AT 9:00 AM
                </div>
              </div>
            </div>
          </Fade>
          <Fade duration={800} delay={800}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_location})`,
                    }}
                  />
                </div>
                <div className="vn_title">Event Location</div>
                <div className="vn_desc">
                  2nd Pl & Court St
                  <br />
                  Brooklyn, NY 11231
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default VenueInfo;
