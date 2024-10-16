import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "./SearchBar/SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon/ShoppingCartIcon";

function Header({ handleSearchChange }) {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInputValue(inputValue);
    handleSearchChange(inputValue);
    updateShrinkState(inputValue);
  };

  useEffect(() => {
    if (searchInputValue) {
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  }, [searchInputValue]);

  const locationPath = location.pathname;

  const headerClass = `header-container ${isShrunk ? "shrink" : ""}
  } ${locationPath !== "/" ? "while-about" : ""}`;

  return (
    <div className={headerClass}>
      <img
        src="/images/sun03.png"
        alt="sun-image"
        className={`header-image ${isShrunk ? "shrink" : ""}`}
      />
      <div className="header-center">
        <Link to="/" style={{ textDecoration: "none" }} onClick={scrollToTop}>
          <h1>The Veggie Market</h1>
        </Link>
        <p>
          <i>Top Quality Organic Vegetables </i>
        </p>
        <div className={`header-buttons ${isShrunk ? "shrink" : ""}`}>
          <Link to="/about-us" style={{ textDecoration: "none" }}>
            <button>About Us</button>
          </Link>
          <Link to="/gallery" style={{ textDecoration: "none" }}>
            <button>Gallery</button>
          </Link>
        </div>
      </div>
      <SearchBar isShrunk={isShrunk} handleInputChange={handleInputChange} />
      <ShoppingCartIcon />
    </div>
  );
}

export default Header;
