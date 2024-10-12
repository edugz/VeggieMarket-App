import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import "./ItemList.css";
import inventory from "/public/inventory";

function ItemList({
  addToCount,
  subtractFromCount,
  searchQuery,
  addToCart,
  subtractFromCart,
  updateCount,
  productCounts,
}) {
  const lowercasedQuery = searchQuery.trim().toLowerCase();

  /* Function to Filter Inventory base on 'name' or 'weight' according to user input */
  const filteredItems = inventory.filter(({ name, prices }) => {
    const nameMatches = name.toLowerCase().includes(lowercasedQuery);
    const weightMatches = prices.some(
      ({ weight }) => weight.toString() === lowercasedQuery
    );
    return nameMatches || weightMatches;
  });

  /* Function to filter through prices to get weights and compare to user query */
  const getFilteredWeight = (prices) => {
    return prices.filter(({ weight }) => weight.toString() === lowercasedQuery);
  };

  /* Render Filtered Inventory Function */
  const renderProductItems = (id, name, image, prices) => {
    const filteredWeight = getFilteredWeight(prices);

    const productItemCommonProps = {
      id,
      name,
      image,
      addToCount,
      subtractFromCount,
      addToCart,
      subtractFromCart,
      updateCount,
    };

    /* Check if any name includes the user query */
    if (name.toLowerCase().includes(lowercasedQuery)) {
      return prices.map((priceItem, index) => {
        const uniqueId = `${id}-${priceItem.weight}`;
        const productItemProps = {
          weight: priceItem.weight,
          price: priceItem.price,
          ...productItemCommonProps,
          count: productCounts[uniqueId] || 0,
        };

        return (
          <ProductItem key={`${uniqueId}-${index}`} {...productItemProps} />
        );
      });
    }

    /* Check if any weight matches the user query */
    if (filteredWeight.length > 0) {
      return filteredWeight.map((priceItem, index) => {
        const uniqueId = `${id}-${priceItem.weight}`;
        const productItemProps = {
          weight: priceItem.weight,
          price: priceItem.price,
          ...productItemCommonProps,
          count: productCounts[uniqueId] || 0,
        };

        return (
          <ProductItem key={`${uniqueId}-${index}`} {...productItemProps} />
        );
      });
    }

    return null; // Return null if neither match
  };

  /* Render Full Inventory or Filtered Array */
  return (
    <div className="big-div-boy">
      <h2 className="list-title">Our Harvest</h2>
      <div className="item-list-container">
        {(lowercasedQuery ? filteredItems : inventory).map(
          ({ id, name, image, prices }) =>
            renderProductItems(id, name, image, prices)
        )}
      </div>
    </div>
  );
}

export default ItemList;
