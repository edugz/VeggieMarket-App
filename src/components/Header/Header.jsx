import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchBar from "./SearchBar/SearchBar";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

function Header({ cartCount }) {
  const [isShrunk, setIsShrunk] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsShrunk(true);
    } else {
      setIsShrunk(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header-container ${isShrunk ? "shrink" : ""}`}>
      <img
        src="/images/sun03.png"
        alt="sun-image"
        className={`header-image ${isShrunk ? "shrink" : ""}`}
      />
      <div className="header-center">
        <h1>The Veggie Market</h1>
        <p>
          <i>Top Quality Organic Vegetables </i>
        </p>
        <div className={`header-buttons ${isShrunk ? "shrink" : ""}`}>
          <button>About Us</button>
          <button>Events</button>
          <button>Subscription</button>
        </div>
      </div>
      <SearchBar isShrunk={isShrunk} />
      <ShoppingCart isShrunk={isShrunk} cartCount={cartCount} />
    </div>
  );
}

export default Header;
