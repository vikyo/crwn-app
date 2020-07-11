import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./containers/homepage/homepage";
import ShopPage from "./containers/shopPage/shopPage";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
