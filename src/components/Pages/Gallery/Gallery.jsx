import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery-main">
      <div className="gallery">Gallery</div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="go-back-button">Back</button>;
      </Link>
    </div>
  );
}

export default Gallery;
