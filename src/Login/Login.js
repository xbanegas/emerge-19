import React, { useContext } from "react";
import { MyContext } from "../MyProvider";
// import styles from "./Login.module.css";

const Login = () => {
  const data = useContext(MyContext);

  // console.log(data);

  return (
    <div>
      <div id="fb-auth-container"><h1 style={{textAlign: "center"}}>Sign In</h1></div>
    </div>
  )
};

export default Login;