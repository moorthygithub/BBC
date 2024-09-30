import React from "react";
import gif from "./event.gif";
import styles from "./floating.module.css"; // Import the CSS module

const Floating = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerMenu}>
        <ul className={styles.smothscroll2}>
          <a href="/interest">
            <img src={gif} alt="Floating gif" />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Floating;
