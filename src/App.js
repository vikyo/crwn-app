import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import Homepage from "./containers/homepage/homepage";
import ShopPage from "./containers/shopPage/shopPage";
import Header from "./components/header/header";
import SignInAndSignUp from "./containers/sign-in-and-sign-up/sign-in-and-sign-up";
import { setCurrentUser } from "./redux/user/actions";
import { selectCurrentUser } from "./redux/user/selector";
import Checkout from "./containers/checkout/checkout";
import { selectCollectionsForPreview } from "./redux/shop/selector";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />

          {/* Conditional route redirection using render method */}
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

// mapDispatchToProps is a function, that takes state as parameter and returns an object
/* const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
}); */

// New syntax using destructuring
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

// mapDispatchToProps is a function, that takes dispatch as parameter and returns an object
const mapDispatchToProps = (dispatch) => ({
  setCurrentUserFunction: (userObject) => dispatch(setCurrentUser(userObject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
