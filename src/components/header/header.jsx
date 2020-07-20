import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/user/selector";
import { selectCartHidden } from "../../redux/cart/selector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  // OptionDiv,
} from "./header-styles";
import { signOutStart } from "../../redux/user/actions";

const Header = ({ currentUser, cartHidden, history, signOutStart }) => {
  const clickHandler = () => {
    signOutStart();
    history.push("/");
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={clickHandler}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/sign-in">SIGN IN</OptionLink>
        )}
        <CartIcon />
        {!cartHidden ? <CartDropdown /> : null}
      </OptionsContainer>
    </HeaderContainer>
  );
};

// Use createStructuredSelector to make code more readable
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
