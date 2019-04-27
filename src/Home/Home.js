import React, { useContext } from "react";
import { MyContext } from "../MyProvider";
import styles from "./Home.module.css";
const Home = () => {
  const data = useContext(MyContext);

  return (
    <div>
      <div className={styles.cover}>
        <div className={styles.navbar}>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
        </div>
        <div>
          <div className={styles.Rectangleholder}>
            search
            <div className={styles.Rectangle2}>1</div>
            <div className={styles.centerholder}>
              <div className={styles.holder}>
                <div className={styles.Lets}>LET’S</div>{" "}
                <div className={styles.eat}>EAT</div>
              </div>
              <div className={styles.Lets}>TOGETHER</div>
            </div>
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
