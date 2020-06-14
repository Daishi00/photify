import React from "react";
import styles from "./header.module.scss";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";

const Header = () => {
  return (
    <header>
      <div className={styles.logoContainer}>
        <h1>poth.io</h1>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <PersonIcon className={styles.icon} />
          Login
        </button>
        <button className={styles.button}>
          <AddIcon className={styles.icon} />
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
