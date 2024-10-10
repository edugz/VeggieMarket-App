import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import "./ItemList.css";
import inventory from "/public/inventory";

function ItemList({ addToCart, subtractFromCart }) {
  return (
    <div className="item-list-container">
      {inventory.map(({ id, name, image, prices }) =>
        prices.map((priceItem, index) => (
          <ProductItem
            key={`${id}-${index}`}
            id={id}
            name={name}
            image={image}
            weight={priceItem.weight}
            price={priceItem.price}
            addToCart={addToCart}
            subtractFromCart={subtractFromCart}
          />
        ))
      )}
    </div>
  );
}

export default ItemList;
