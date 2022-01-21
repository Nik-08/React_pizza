import React from "react";

import { Header } from "./component";
import { Home, Cart } from "./pages";
import { Route, Switch } from "react-router-dom";

function App({}) {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <Route path="/cart" component={Cart} exact></Route>
      </div>
    </div>
  );
}

export default App;
