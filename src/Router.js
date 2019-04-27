import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";

import MyProvider, { MyConsumer } from "./MyProvider";

const Router = () => (
  <BrowserRouter>
  
        <MyProvider>
          <Switch>
            <Route exact path="/" component={App} />
          </Switch>{" "}
        </MyProvider>

  </BrowserRouter>
);

export default Router;
