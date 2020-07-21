import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/selector";
import { toggleCartDropdown } from "../../redux/cart/action";
import {
  CartDropDownContainer,
  CartItemContainer,
  ErrorMessageContainer,
  CartButtonContainer,
} from "./cart-dropdown-styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const clickHandler = () => {
    history.push("/checkout");
    dispatch(toggleCartDropdown());
  };
  return (
    <CartDropDownContainer>
      <CartItemContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <ErrorMessageContainer>Cart is empty</ErrorMessageContainer>
        )}
      </CartItemContainer>
      <CartButtonContainer type="button" onClick={clickHandler}>
        GO TO CHECKOUT
      </CartButtonContainer>
    </CartDropDownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// We can give it like this but there is anathor way using dispatch props directly, see in clickHandler
// when connect() is used , it passes dispatch props in the container
// const mapDispatchToProps = (dispatch) => ({
//   toggleCartDropDownFunction: () => {
//     dispatch(toggleCartDropdown());
//   },
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
