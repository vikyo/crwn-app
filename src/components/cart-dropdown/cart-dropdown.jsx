import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/selector";
import { toggleCartDropdown } from "../../redux/cart/action";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const clickHandler = () => {
    history.push("/checkout");
    dispatch(toggleCartDropdown());
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <div className="empty-message">Cart is empty</div>
        )}
      </div>
      <CustomButton type="button" onClick={clickHandler}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// We can give it like this but there is anathor way using dispatch props directly, see in clickHandler
// const mapDispatchToProps = (dispatch) => ({
//   toggleCartDropDownFunction: () => {
//     dispatch(toggleCartDropdown());
//   },
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
