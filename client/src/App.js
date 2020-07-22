import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { checkUserSession } from "./redux/user/actions";
import { GlobalStyle } from "./global-style";
import { selectCurrentUser } from "./redux/user/selector";
import Header from "./components/header/header";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from "./components/error-boundary/error-boundary";

// Lazy Loaded components
const HomePage = lazy(() => import("./containers/homepage/homepage"));
const ShopPage = lazy(() => import("./containers/shopPage/shopPage"));
const SignInAndSignUp = lazy(() =>
  import("./containers/sign-in-and-sign-up/sign-in-and-sign-up")
);
const Checkout = lazy(() => import("./containers/checkout/checkout"));

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/sign-in"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
              }
            />
            <Route exact path="/checkout" component={Checkout} />
          </Suspense>
        </ErrorBoundary>
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
