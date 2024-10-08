import React from "react";
import "./SearchBar.css";

function SearchBar({ isShrunk, handleInputChange }) {
  const handleClick = () => {
    console.log("Image clicked!");
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
        className="search-box"
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
