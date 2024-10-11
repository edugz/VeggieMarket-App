import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "./SearchBar/SearchBar";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

function Header({ cartCount, handleSearchChange }) {
  const [isShrunk, setIsShrunk] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");

  const location = useLocation();

  const updateShrinkState = (inputValue) => {
    const shouldShrink = inputValue.length > 0 || window.scrollY > 50;
    setIsShrunk(shouldShrink);
  };

  const handleScroll = () => {
    updateShrinkState(searchInputValue);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [searchInputValue]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInputValue(inputValue);
    handleSearchChange(inputValue);
    updateShrinkState(inputValue);
  };

  const headerClass = `header-container ${isShrunk ? "shrink" : ""} ${
    location.pathname === "/about-us" ? "while-about" : ""
  }`;

  return (
    <div className={headerClass}>
      <img
        src="/images/sun03.png"
        alt="sun-image"
        className={`header-image ${isShrunk ? "shrink" : ""}`}
      />
      <div className="header-center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>The Veggie Market</h1>
        </Link>
        <p>
          <i>Top Quality Organic Vegetables </i>
        </p>
        <div className={`header-buttons ${isShrunk ? "shrink" : ""}`}>
          <Link to="/about-us" style={{ textDecoration: "none" }}>
            <button>About Us</button>
          </Link>
          <button>Events</button>
          <button>Subscription</button>
        </div>
      </div>
      <SearchBar isShrunk={isShrunk} handleInputChange={handleInputChange} />
      <ShoppingCart isShrunk={isShrunk} cartCount={cartCount} />
    </div>
  );
}

export default Header;
