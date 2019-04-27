import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

import { withRouter } from "react-router-dom";

export const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    user: undefined,
    pageTitle: "Share a Meal",
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
        }}>
        {" "}
        {this.props.children}{" "}
      </MyContext.Provider>
    );
  }
}
const MyConsumer = MyContext.Consumer;

export { MyConsumer };
export default withRouter(MyProvider);
