import React, { Component } from "react";
import Barcode from "react-barcode"; // Import react-barcode

class Discount extends Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef(); // Ref for Name input
    this.emailRef = React.createRef(); // Ref for Email input
    this.state = {
      barcodeValue: null, // To store generated barcode value
      errorMessage: "", // For displaying validation errors
      couponName: "", // To store the entered name for display
      couponEmail: "", // To store the entered email for display
    };
  }

  // Handle form submission
  handleSave = async (e) => {
    e.preventDefault();

    const name = this.nameRef.current.value; // Get value from Name input
    const email = this.emailRef.current.value; // Get value from Email input

    // Simple email validation
    if (!this.validateEmail(email)) {
      this.setState({ errorMessage: "Please enter a valid email address." });
      return;
    }

    // Optional: Add more validation for name or other fields if needed
    if (!name) {
      this.setState({ errorMessage: "Please enter your name." });
      return;
    }

    // Generate barcode value (simulated here)
    const barcodeValue = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    // Save data to localStorage
    localStorage.setItem("couponName", name);
    localStorage.setItem("couponEmail", email);
    localStorage.setItem("barcodeValue", barcodeValue);

    // Set state to display barcode and clear error message
    this.setState({
      barcodeValue,
      errorMessage: "",
      couponName: name,
      couponEmail: email,
    });

    // Optionally, clear the form fields after saving
    this.nameRef.current.value = "";
    this.emailRef.current.value = "";
  };

  // Validate email format using regex
  validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  render() {
    return (
      <div className="Discount-container">
        <form className="coupon-form" onSubmit={this.handleSave}>
          <h1>Fill out the form to get your coupon:</h1>
          <input
            type="text"
            placeholder="Name"
            ref={this.nameRef} // Attach ref to the Name input field
            className="form-input"
          />
          <input
            type="email"
            placeholder="Email"
            ref={this.emailRef} // Attach ref to the Email input field
            className="form-input"
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
          {this.state.errorMessage && (
            <p className="error-message">{this.state.errorMessage}</p>
          )}
        </form>
        {this.state.barcodeValue && (
          <div className="barcode-display">
            <h4>Details:</h4>
            <p>Name: {this.state.couponName}</p>
            <p>Email: {this.state.couponEmail}</p>
            <h4>Your Barcode:</h4>
            <Barcode value={`$` + this.state.barcodeValue} />
            <p>Take a screenshot of this barcode to avail your coupon.</p>
          </div>
        )}
      </div>
    );
  }
}

export default Discount;
