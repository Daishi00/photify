import React from "react";
import styles from "./header.module.scss";
import PersonIcon from "@material-ui/icons/Person";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AddIcon from "@material-ui/icons/Add";
import { Button, Modal } from "semantic-ui-react";
import AddImage from "./AddImage";
import Login from "./Login";
const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.logoContainer}>
          <h1>photify</h1>
        </div>
        <div className={styles.buttonContainer}>
          <AddImage />
          <Login />
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
