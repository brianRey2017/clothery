import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "@pages/Home/Home.component";
import { Shop } from "@pages/Shop/Shop.component";
import "./App.scss";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
    </Switch>
  );
}

export default App;
