import React from "react";
import { Route, Switch } from "react-router-dom";

import { auth } from "@lib/firebase";
import Header from "@components/header/header.component";
import { Home } from "@pages/Home/Home.component";
import { Shop } from "@pages/Shop/Shop.component";
import { SignInAndSignUp } from "@pages/SignInAndSignUp/SignInAndSignUp.component";
import UsersService from "@services/users";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  async componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      const userRef = await UsersService.createUser(user);
      // if (user) {
      //   const { displayName, email, uid: userId } = user;
      //   this.setState({
      //     currentUser: {
      //       displayName,
      //       email,
      //       userId,
      //     },
      //   });
      // }
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
