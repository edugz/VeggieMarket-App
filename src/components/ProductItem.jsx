import React from "react";
import "./ProductItem.css";

function ProductItem() {
  return (
    <div className="item-container">
      <img src="/images/placeholder-square.jpg" alt="" />
      <h3>Item Name</h3>
      <p>Price</p>
      <div className="add-product-container">
        <button>-</button>
        <span> x </span>
        <button>+</button>
      </div>
    </div>
  );
}

export default ProductItem;
