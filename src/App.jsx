import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "@components/header/header.component";
import { Home } from "@pages/Home/Home.component";
import { SignInAndSignUp } from "@pages/SignInAndSignUp/SignInAndSignUp.component";
import { Shop } from "@pages/Shop/Shop.component";
import "./App.scss";
import { auth } from "@lib/firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
