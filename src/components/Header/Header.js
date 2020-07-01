import React from "react";
import styles from "./header.module.scss";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import AddPhoto from "../AddPhoto/AddPhoto";
const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.logoContainer}>
          <h1>photify</h1>
        </div>
        <div className={styles.buttonContainer}>
          <AddPhoto />
          <button className={styles.button}>
            <PersonIcon className={styles.icon} />
            Log in
          </button>
          <button className={styles.button}>
            <AddIcon className={styles.icon} />
            Sign up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
