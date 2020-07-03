import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import styles from "../Header/header.module.scss";
import Avatar from "react-avatar";
const Profile = () => {
  return (
    <Modal
      dimmer={"blurring"}
      trigger={<button className={styles.button}>Profile</button>}
    >
      <Modal.Header>Hello back, {localStorage.getItem("name")}!</Modal.Header>
      <Modal.Content image>
        <Avatar
          name={localStorage
            .getItem("name")
            .split(" ")
            .map((n) => n[0])
            .join(".")}
        />
        <Modal.Description style={{ marginLeft: "50px" }}>
          <Header>Hope u have a great time!</Header>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default Profile;
