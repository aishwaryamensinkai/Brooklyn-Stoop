import React, { Component } from "react";
import Fade from "react-reveal/Fade"; // Import Fade effect from react-reveal
import Slide from "react-reveal/Slide"; // Import Slide effect from react-reveal

class Discount extends Component {
  constructor(props) {
    super(props);
    // Initial state setup
    this.state = {
      discountStart: 1, // Start discount percentage
      discountEnd: 10, // End discount percentage
      showForm: false, // Flag to show/hide form (not currently used)
      barcodeValue: null, // Barcode value (not currently used)
    };
  }

  // Function to increment discount percentage until it reaches discountEnd
  displayPercentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({ discountStart: this.state.discountStart + 1 });
    }
  };

  // Lifecycle method to update component
  componentDidUpdate() {
    // Call displayPercentage every 50 milliseconds
    setTimeout(() => {
      this.displayPercentage();
    }, 50);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          {/* Fade-in effect for discount percentage */}
          <Fade onReveal={() => this.displayPercentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}$</span>
              <span>OFF</span>
            </div>
          </Fade>
          {/* Slide-in effect for discount description */}
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
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
