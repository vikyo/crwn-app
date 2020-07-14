import React from "react";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/user/selector";
import { selectCartHidden } from "../../redux/cart/selector";

const Header = ({ currentUser, cartHidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {/* <Link className="option" to="/sign-in">
          CONTACT
        </Link> */}
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
        {!cartHidden ? <CartDropdown /> : null}
      </div>
    </div>
  );
};

// Use createStructuredSelector to make code more readable
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
