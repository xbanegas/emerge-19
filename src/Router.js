import React, {Component, useEffect, useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Profile from "./Profile/Profile";
import Search from "./Search/Search"

import MyProvider, { MyConsumer } from "./MyProvider";
import { init } from "events";

class Router extends Component  {
  render () {
    return (
    <BrowserRouter>
        <MyProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Product" component={Product} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Search" component={Search} />
          </Switch>{" "}
        </MyProvider>
    </BrowserRouter>)
  };
};

export default Router;
