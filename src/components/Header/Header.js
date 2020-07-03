import React from "react";
import styles from "./header.module.scss";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import { Button, Modal } from "semantic-ui-react";
import Login from "../Login/Login";
import AddPhoto from "../AddPhoto/AddPhoto";
import Signup from "../Signup/Signup";
const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.logoContainer}>
          <h1>photify</h1>
        </div>
        <div className={styles.buttonContainer}>
          <AddPhoto />
          <Login />
          <Signup />
        </div>
      </header>
    </div>
  );
};

export default Header;
