import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Homepage from "./containers/homepage/homepage";
import ShopPage from "./containers/shopPage/shopPage";
import Header from "./components/header/header";
import SignInAndSignUp from "./containers/sign-in-and-sign-up/sign-in-and-sign-up";
import { selectCurrentUser } from "./redux/user/selector";
import Checkout from "./containers/checkout/checkout";
import { checkUserSession } from "./redux/user/actions";
import { GlobalStyle } from "./global-style";

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />

        <Route
          exact
          path="/sign-in"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
};

// New syntax using destructuring
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
