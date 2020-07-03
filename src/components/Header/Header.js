import React from "react";
import styles from "./header.module.scss";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import { Button, Modal, Icon } from "semantic-ui-react";
import Login from "../Login/Login";
import AddPhoto from "../AddPhoto/AddPhoto";
import Signup from "../Signup/Signup";
import getToken from "../utils/getToken";

const Header = () => {
  const removeToken = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <header>
        <div className={styles.logoContainer}>
          <h1>photify</h1>
        </div>
        <div className={styles.buttonContainer}>
          {getToken() !== "" && <AddPhoto />}
          {getToken() === "" && <Login />}
          {getToken() === "" && <Signup />}
          {getToken() !== "" && (
            <button className={styles.button} onClick={() => removeToken()}>
              <Icon className="sign out" />
              Log out
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
