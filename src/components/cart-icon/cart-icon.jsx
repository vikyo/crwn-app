import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";
import { toggleCartDropdown } from "../../redux/cart/action";

const CartIcon = ({ toggleCartDropDownFunction }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropDownFunction}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropDownFunction: () => dispatch(toggleCartDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
