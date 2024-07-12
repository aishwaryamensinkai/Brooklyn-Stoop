import React from "react";
import Fade from "react-reveal/Fade";

const VenueInfo = () => {
  // Event details
  const eventDate = "July 29th, 2024";
  const eventTime = "9:00 AM";
  const eventLocation = "2nd Pl & Court St, Brooklyn, NY 11231";

  // Function to share event details via email
  const shareViaEmail = () => {
    const subject = encodeURIComponent("Event Details");
    const body = encodeURIComponent(
      `Join us on ${eventDate} at ${eventTime} at ${eventLocation}.`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  // Function to share event details via SMS/Message
  const shareViaMessage = () => {
    const message = `Join us on ${eventDate} at ${eventTime} at ${eventLocation}.`;
    const phoneNumber = ""; // Replace with recipient's phone number or leave empty for user input
    const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  // Function to share event details via Instagram (placeholder)
  const shareViaInstagram = () => {
    // Replace with your Instagram sharing logic or open Instagram URL
    window.open("https://www.instagram.com/", "_blank");
  };

  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          {/* Fade-in effect for event date and time */}
          <Fade duration={800}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  {/* Square icon for event date */}
                  <div className="vn_icon_square bck_red" />
                  {/* Icon for event date (replace URL with actual image) */}
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(https://example.com/calendar.png)`, // Replace with actual URL
                    }}
                  />
                </div>
                {/* Title and description for event date */}
                <div className="vn_title">Event Date & Time</div>
                <div className="vn_desc">
                  {eventDate} <br />
                  AT {eventTime}
                </div>
              </div>
            </div>
          </Fade>
          {/* Fade-in effect for event location */}
          <Fade duration={800} delay={800}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  {/* Square icon for event location */}
                  <div className="vn_icon_square bck_yellow" />
                  {/* Icon for event location (replace URL with actual image) */}
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(https://example.com/location.png)`, // Replace with actual URL
                    }}
                  />
                </div>
                {/* Title and description for event location */}
                <div className="vn_title">Event Location</div>
                <div className="vn_desc" style={{ marginBottom: "63px" }}>
                  {eventLocation}
                </div>
                {/* Additional information */}
                <div>See in Maps at bottom of the page.</div>
              </div>
            </div>
          </Fade>
        </div>
        {/* Share options section */}
        <p style={{ textAlign: "center", color: "wheat" }}> Share on</p>
        <div className="share_options">
          {/* Button to share via email */}
          <button className="share_button" onClick={shareViaEmail}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
              alt="Email"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
          </button>
          {/* Button to share via message/SMS */}
          <button className="share_button" onClick={shareViaMessage}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Messages-1024.png"
              alt="Message"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
          </button>
          {/* Button to share via Instagram */}
          <button className="share_button" onClick={shareViaInstagram}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
