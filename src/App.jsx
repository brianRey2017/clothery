import { connect } from "react-redux";
import React from "react";
import { Route, Switch } from "react-router-dom";

import { auth } from "@lib/firebase";
import Header from "@components/common/header/header.component";
import { Home } from "@pages/Home/Home.component";
import { setCurrentUser } from "@redux/user/user.actions";
import { Shop } from "@pages/Shop/Shop.component";
import { SignInAndSignUp } from "@pages/SignInAndSignUp/SignInAndSignUp.component";
import UsersService from "@services/users";
import "./App.scss";

class App extends React.Component {
  async componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await UsersService.createUser(userAuth);

        // You can listen to a document with the onSnapshot() method.
        // An initial call using the callback you provide creates a document snapshot
        // immediately with the current contents of the single document.
        // Then, each time the contents change,
        // another call updates the document snapshot.
        userRef.onSnapshot((snapShot) => {
          // THIS IS ASYNC
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      // IF IS NULL (ON SIGN OUT) SET IT IN STATE
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
