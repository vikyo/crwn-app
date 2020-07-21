import React from "react";
import { connect } from "react-redux";

import "./checkout-item.scss";
import { removeItem, addItem, decreaseItem } from "../../redux/cart/action";

// Here instead of using mapDispatchToProps, we can directly use dispatch to do the same job,check cart-dropdown component
const CheckoutItem = ({
  item,
  removeItemFromCartFunction,
  increaseItemQuantity,
  decreaseItemQuantity,
  // ...otherProps
}) => {
  // console.log(otherProps);
  const { id, imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItemQuantity(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseItemQuantity(item)}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => removeItemFromCartFunction(id)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCartFunction: (id) => dispatch(removeItem(id)),
  increaseItemQuantity: (item) => dispatch(addItem(item)),
  decreaseItemQuantity: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
