import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchBar from "./SearchBar/SearchBar";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

function Header({ cartCount, handleSearchChange }) {
  const [isShrunk, setIsShrunk] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");

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
      <SearchBar isShrunk={isShrunk} handleInputChange={handleInputChange} />
      <ShoppingCart isShrunk={isShrunk} cartCount={cartCount} />
    </div>
  );
}

export default Header;
