import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import Homepage from "./containers/homepage/homepage";
import ShopPage from "./containers/shopPage/shopPage";
import Header from "./components/header/header";
import SignInAndSignUp from "./containers/sign-in-and-sign-up/sign-in-and-sign-up";
import {
  auth,
  createUserProfileDocument,
  // eslint-disable-next-line
  addCollectionAndDocumentsToFirestore,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/actions";
import { selectCurrentUser } from "./redux/user/selector";
import Checkout from "./containers/checkout/checkout";
import { selectCollectionsForPreview } from "./redux/shop/selector";

class App extends React.Component {
  unSubscribeFromAuth = null;

  // Getting current user on sign in with google
  componentDidMount() {
    // eslint-disable-next-line
    const { setCurrentUserFunction, collectionsArray } = this.props;
    /* Using firebase 'auth' library, whenever the authentication state changed,
    we want it to pass us the user auth object,
    that user auth object is stored in authentication table in firebase */
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        /* onSnapshot listens to any changes in the snapshot object at that particular documnet ref
        so if the user updates some values or deletes, then this listens to it */
        userRef.onSnapshot((snapShot) => {
          setCurrentUserFunction({
            id: snapShot.id,
            ...snapShot.data(),
          });
          // console.log(this.state);
        });
      }

      setCurrentUserFunction(userAuth);
      /* collectionArray form [{id: 1,title: 'hats', routeName: 'hats',items: [{id:'30', name:'xyz',imageUrl:'abc'}]}]
      but we do not need top level id and routename only title and items array so using .map() */
      /* addCollectionAndDocumentsToFirestore(
        "collections",
        collectionsArray.map(({ title, items }) => ({ title, items }))
      ); */
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
