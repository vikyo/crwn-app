import React from "react";

import "./cart-item.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  console.log(imageUrl);
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="images" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
