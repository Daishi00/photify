import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.logoContainer}>
        <h1>poth.io</h1>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Login</button>
        <button className={styles.button}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
