import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="contact-review">
        <p>Contact Us...</p>
        <p>Leave a review!</p>
      </div>{" "}
      <div>
        <p>Copyright © {currentYear}</p>
      </div>
      <div className="social-icons-container">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-whatsapp"></i>
      </div>
    </div>
  );
}

export default Footer;
