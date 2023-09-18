import React from "react";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img alt="product" src={productImage} />
      <div className="description">
        <p>
          <b> {productName} </b>
        </p>
        <p>
          <b> {price} €</b>
        </p>
      </div>
      <button className="addToCartBttn">Add to cart</button>
    </div>
  );
};
