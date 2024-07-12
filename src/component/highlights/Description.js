import React from "react";
import Fade from "react-reveal/Fade";

const Description = () => {
  return (
    <Fade>
      {/* Container for centered content */}
      <div className="center_wrapper">
        <h2>Register and Get Your Discount Coupon!</h2>
        {/* Description text with justified alignment */}
        <div className="highlight_description" style={{ textAlign: "justify" }}>
          Sign up today and unlock exclusive savings! Receive a discount coupon
          that you can use for your next purchase, whether online or at our
          physical stores. Our coupons are valid on a wide range of products,
          ensuring you get the best deals wherever you shop with us. Don't miss
          out on this opportunity to save big! Enjoy discounts ranging from{" "}
          <strong>$1 to $10</strong>.
        </div>
      </div>
    </Fade>
  );
};

export default Description;
