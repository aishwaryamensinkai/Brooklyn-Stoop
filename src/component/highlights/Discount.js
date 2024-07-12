import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Button from "../utils/Button";
import ticketIcon from "../../resources/images/icons/ticket.png";

class Discount extends Component {
  state = {
    discountStart: 10,
    discountEnd: 50,
  };

  displayPercentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({ discountStart: this.state.discountStart + 1 });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.displayPercentage();
    }, 50);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.displayPercentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Register before 30th of October:</h3>
              <ul>
                <li>Instant access to our latest promotions and discounts</li>
                <li>Exclusive offers tailored just for you</li>
                <li>Convenient online and offline redemption options</li>
                <li>
                  Stay updated with our newest arrivals and special collections
                </li>
              </ul>
              <Button
                img={ticketIcon}
                size="large"
                alt="Purchase ticket now"
                name="Buy Now"
                bck="#1690F0"
                color="#fff"
                link="http://www.google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
export default Discount;
