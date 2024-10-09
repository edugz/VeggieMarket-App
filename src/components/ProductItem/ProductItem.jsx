import React from "react";
import "./ProductItem.css";

function ProductItem(props) {
  return (
    <div className="item-container">
      <img src={props.image} alt="" />
      <h3>
        {props.name} {props.weight}
      </h3>
      <p>¥ {props.price}</p>
      <div className="add-product-container">
        <button>-</button>
        <span> x </span>
        <button>+</button>
      </div>
    </div>
  );
}

export default ProductItem;
