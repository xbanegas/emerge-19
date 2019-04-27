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
  constructor(props){
    super(props);
    this.state = {initialized: false};
  }

  initFirebase () {
    const firebaseConfig = {
      apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
      authDomain: "661573101353.firebaseapp.com",
      databaseURL: "https://emerge-19.firebaseio.com",
      // projectId: "project-id",
      // storageBucket: "project-id.appspot.com",
      // messagingSenderId: "sender-id",
    };

    window.firebase.initializeApp(firebaseConfig);
    return window.firebase.database
  }

  componentDidMount() {
    if (window.firebase){
      this.initFirebase();
      this.setState({initialized: true});
    }
  }


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
