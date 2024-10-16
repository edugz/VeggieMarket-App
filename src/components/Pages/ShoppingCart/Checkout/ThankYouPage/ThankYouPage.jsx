import React from "react";
import { Link } from "react-router-dom";
import "./ThankYouPage.css";

function ThankYouPage() {
  return (
    <div className="thank-you-main">
      <div className="thank-you-container">
        <div className="thank-you">Thank You!</div>
        <p className="thank-you-message">
          We will be contacting you soon to arrange
        </p>
        <p className="thank-you-message"> payment and shipping!</p>
        <Link to="/">
          <button className="go-home-button">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
