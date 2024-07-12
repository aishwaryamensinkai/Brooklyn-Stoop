import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class CountDown extends Component {
  state = {
    eventDate: "Jul,29,2024", // Target event date (format: Month,Day,Year)
    days: "0", // Days remaining
    hours: "0", // Hours remaining
    minutes: "0", // Minutes remaining
    seconds: "0", // Seconds remaining
  };

  // Function to calculate time left until eventDate
  getTimeLeft = (eventDate) => {
    const time = Date.parse(eventDate) - Date.parse(new Date());

    if (time < 0) {
      console.log("Time Ended");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      // Update state with calculated time values
      this.setState({ seconds, minutes, hours, days });
    }
  };

  componentDidMount() {
    // Update time every second using setInterval
    setInterval(() => this.getTimeLeft(this.state.eventDate), 1000);
  }

  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event starts in</div>
          <div className="countdown_bottom">
            {/* Days */}
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            {/* Hours */}
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hrs</div>
            </div>
            {/* Minutes */}
            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>
            {/* Seconds */}
            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default CountDown;
