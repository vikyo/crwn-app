import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";
import { toggleCartDropdown } from "../../redux/cart/action";
import { selectCartItemsCount } from "../../redux/cart/selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartDropDownFunction, itemCount }) => {
  return (
    <div
      className="cart-icon"
      onMouseEnter={toggleCartDropDownFunction}
      onClick={toggleCartDropDownFunction}
    >
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

// For getting the total quantity of items in cart
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

// dispatch toggle cart dropdown
const mapDispatchToProps = (dispatch) => ({
  toggleCartDropDownFunction: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
