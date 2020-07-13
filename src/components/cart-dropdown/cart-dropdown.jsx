import React from "react";

import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custom-button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <div>item1</div>
        <div>item2</div>
      </div>
      <CustomButton type="button">GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
