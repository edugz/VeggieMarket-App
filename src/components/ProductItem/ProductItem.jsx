import React from "react";
import "./ProductItem.css";
import Counter from "./Counter/Counter";

function ProductItem(props) {
  return (
    <div className="item-container">
      <img src={props.image} alt="" />
      <h3>
        {props.name} {props.weight}
      </h3>
      <p>¥ {props.price}</p>
      <Counter />
    </div>
  );
}

export default ProductItem;
