import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Redirect } from "react-router-dom";

import "./checkout.scss";
import { selectCartItems, selectCartTotal } from "../../redux/cart/selector";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

const Checkout = ({ cartItems, total }) => {
  // if there is no cart item or user emptied the cart then redirect to hmepage
  if (cartItems.length === 0) {
    return <Redirect to="/" />;
  }
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} item={cartItem} />;
      })}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        check the link https://stripe.com/docs/testing for card details
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
