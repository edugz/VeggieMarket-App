import React from "react";
import "./SearchBar.css";

function SearchBar({ isShrunk }) {
  const handleClick = () => {
    console.log("Image clicked!");
  };
  return (
    <div className="search-bar-container">
      <img
        src="/images/search-icon.png"
        alt="search-icon"
        className={`search-icon ${!isShrunk ? "shrink" : ""}`}
        onClick={handleClick}
      />
    </div>
  );
}

export default SearchBar;
