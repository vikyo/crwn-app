import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./containers/homepage/homepage";

const pageComponent = (props) => {
  console.log(props);
  return <h1>{props.match.params.item} page</h1>;
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/:item" component={pageComponent} />
      </Switch>
    </div>
  );
}

export default App;
