import React, { useContext } from "react";
import { MyContext } from "../MyProvider";
import styles from "./Home.module.css";
const Home = () => {
  const data = useContext(MyContext);

  return (
    <div>
      <div>
        <div className={styles.homeimage}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/emerge-19.appspot.com/o/assets%2Fhomeimage.jpg?alt=media&token=01ba96cd-0118-452c-b898-85e092e44978"
            className={styles.homeimage}
          />
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
        </div>
        <div>
          <div>
            search
            <div>1</div>
            <div>1</div>
            <div>
              <div>a</div> <div>b</div>
            </div>
            <div>1</div>
            <div>
              <div>a</div> <div>b</div>
            </div>
            <div>1</div>
            <div>
              <div>a</div> <div>b</div>
            </div>
            <div>1</div>
          </div>
          <div>heading</div>
        </div>
      </div>
      <div>
        <div>f title</div>
        <div>
          <div>
            <div>1</div>
            <div>2</div>
          </div>{" "}
          <div>
            <div>1</div>
            <div>2</div>
          </div>{" "}
          <div>
            <div>1</div>
            <div>2</div>
          </div>{" "}
          <div>
            <div>1</div>
            <div>2</div>
          </div>{" "}
          <div>
            <div>1</div>
            <div>2</div>
          </div>{" "}
          <div>
            <div>1</div>
            <div>2</div>
          </div>
          icons
        </div>
        <div>top rated plates</div>
        <div>image component</div>
      </div>
      <div>
        footer
        <div>
          <div>c1</div>
          <div>c2</div>
          <div>c3</div>
          <div>c4</div>
        </div>
        <div>line</div>
        <div>copyright</div>
      </div>
    </div>
  );
};

export default Home;
