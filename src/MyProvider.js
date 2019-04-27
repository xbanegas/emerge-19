import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

import { withRouter } from "react-router-dom";

export const MyContext = React.createContext();
class MyProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: undefined,
      pageTitle: "Share a Meal",
      initialized: false
    };
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
    if (!this.state.initialized){
      this.initFirebase();
      this.setState({initialized: true});
    }
  }


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
