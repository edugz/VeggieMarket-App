import React, { useRef } from "react";
import "./SearchBar.css";

function SearchBar({ isShrunk, handleInputChange }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`search-bar-container ${!isShrunk ? "shrink" : ""}`}>
      <img
        src="/images/search-icon.png"
        alt="search-icon"
        className={`search-icon`}
        onClick={handleClick}
      />
      <input
        ref={inputRef}
        className="search-box"
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
