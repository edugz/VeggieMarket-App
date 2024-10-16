import React from "react";
import { Link } from "react-router-dom";
import "./ThankYouPage.css";

function ThankYouPage() {
  return (
    <div className="thank-you-main">
      <div className="thank-you">Thank You</div>
      <Link to="/">
        <button className="go-back-button">Home</button>
      </Link>
    </div>
  );
}

export default ThankYouPage;
