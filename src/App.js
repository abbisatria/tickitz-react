import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SignIn from "./pages/Auth/SignIn/SignIn";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import Details from "./pages/Details/Details";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
