import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ItemList.css";

function ItemList() {
  return (
    <div className="item-list-container">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}

export default ItemList;
