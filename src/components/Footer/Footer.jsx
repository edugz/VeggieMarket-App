import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="contact-review">
        <Link to="/contact-us" style={{ textDecoration: "none" }}>
          <p className="page-links"> Contact Us </p>
        </Link>
        <Link to="leave-a-review" style={{ textDecoration: "none" }}>
          <p className="page-links">Leave a review!</p>
        </Link>
      </div>
      <div>
        <p>Copyright © {currentYear}</p>
      </div>
      <div className="social-icons-container">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
