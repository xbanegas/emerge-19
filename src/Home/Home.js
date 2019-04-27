import React, { useContext } from "react";
import { MyContext } from "../MyProvider";
const Home = () => {
  const data = useContext(MyContext);

  return (
    <div>
      home
      <div>{data.pageTitle}</div>
    </div>
  );
};

export default Home;
