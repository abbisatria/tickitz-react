import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SignIn from "./pages/Auth/SignIn/SignIn";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import Details from "./pages/Details/Details";
import Order from "./pages/Order/Order";
import Payment from "./pages/Payment/Payment";
import Ticket from "./pages/Ticket/Ticket";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";
import ScrollToTop from "./ScrollToTop";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin" component={Admin} />
          <Route path="/details/:id" component={Details} />
          <Route
            path="/order/:movie_id/:cinema_id/:showtime_id"
            component={Order}
          />
          <Route
            path="/payment/:movie_id/:cinema_id/:showtime_id"
            component={Payment}
          />
          <Route
            path="/ticket/:movie_id/:cinema_id/:showtime_id"
            component={Ticket}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
