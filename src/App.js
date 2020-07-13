import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Homepage from "./containers/homepage/homepage";
import ShopPage from "./containers/shopPage/shopPage";
import Header from "./components/header/header";
import SignInAndSignUp from "./containers/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/actions";

class App extends React.Component {
  unSubscribeFromAuth = null;

  // Getting current user on sign in with google
  componentDidMount() {
    const { setCurrentUserFunction } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUserFunction({
            id: snapShot.id,
            ...snapShot.data(),
          });
          // console.log(this.state);
        });
      }

      setCurrentUserFunction(userAuth);
    });
  }

  // Preventing any memory leaks
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          {/* Conditional route redirection using render method */}
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

// mapDispatchToProps is a function, that takes state as parameter and returns an object
// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });

// New syntax using destructuring
const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

// mapDispatchToProps is a function, that takes dispatch as parameter and returns an object
const mapDispatchToProps = (dispatch) => ({
  setCurrentUserFunction: (userObject) => dispatch(setCurrentUser(userObject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
