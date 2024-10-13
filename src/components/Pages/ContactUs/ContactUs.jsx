import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us-main">
      <div className="contact-us">ContactUs</div>
      <Link to="/">
        <button className="go-back-button">Back</button>
      </Link>
    </div>
  );
}

export default ContactUs;
