import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <img src="/images/sun03.png" alt="sun-image" />
      <div className="header-center">
        <h1>The Market</h1>
        <p>
          <i>Top Quality </i>
        </p>
        <div className="header-buttons">
          <button>About Us</button>
          <button>Events</button>
          <button>Subscription</button>
        </div>
      </div>
      <></>
    </div>
  );
}

export default Header;
