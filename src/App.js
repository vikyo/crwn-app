import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./containers/homepage/homepage";
import ShopPage from "./containers/shopPage/shopPage";
import Header from "./components/header/header";
import signInAndSignUp from "./containers/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unSubscribeFromAuth = null;

  // Getting current user on sign in with google
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            }
            // () => {
            //   console.log(this.state);
            // }
          );
          // console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  // Preventing any memory leaks
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={signInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
