import React, { useState } from "react";
import styles from "./photo.module.scss";
import Download from "@material-ui/icons/SystemUpdateAlt";
import fileDownload from "js-file-download";
import axios from "axios";
import getToken from "../utils/getToken";
import Comment from "../Comment/Comment";
import { Button, Form, Input, Modal, Icon, Header } from "semantic-ui-react";

const Photo = props => {
  const [hover, setHover] = useState(false);
  const [like, setLike] = useState(false);
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState(
    props.likes + Math.floor(Math.random() * 10)
  );

  const handleEnter = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  const handleDownload = () => {
    axios({
      method: "get",
      url: `${props.imgURL}`,
      responseType: "arraybuffer"
    })
      .then(response => {
        fileDownload(response.data, `${props.description}.jpg`);
      })
      .catch(err => {
        console.log(props.imgURL);

        console.log(err.message);
        const decodedErr = String.fromCharCode.apply(
          null,
          new Uint8Array(err.response.data)
        );
      });
  };

  const handleLike = () => {
    if (like === true) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  const openModal = () => {
    // window.open(`http://localhost:5000${props.imgURL} `);
    setModal(true);
  };

  return (
    <>
      <div
        className={styles.imageContainer}
        onMouseEnter={() => handleEnter()}
        onMouseLeave={() => handleLeave()}
      >
        {hover === true && (
          <div className={styles.imageInfo}>
            <div className={styles.opacity} onClick={() => openModal()} />
            <p className={styles.user}>{props.user}</p>
            <p className={styles.description}>{props.description}</p>
            <button
              className={styles.downloadButton}
              onClick={() => handleDownload()}
            >
              <Download className={styles.downloadIcon} />
            </button>

            {getToken() !== "" && (
              <button
                className={`${styles.likeButton} ${like === true &&
                  styles.likeTrue}`}
                onClick={() => handleLike()}
              >
                {like === false && (
                  <i className={`heart outline icon ${styles.heart}`} />
                )}
                {like === true && (
                  <i className={`heart icon ${styles.heart}`} />
                )}
                {like === false && amount}
                {like === true && amount + 1}
              </button>
            )}
          </div>
        )}
        <img
          src={`http://localhost:5000${props.imgURL}`}
          key={props.user}
          styles={{ opacity: 0 }}
        ></img>

        <Modal dimmer={"blurring"} open={modal}>
          <Modal.Header>
            {props.description}{" "}
            <Button
              className={styles.downloadButton}
              onClick={() => handleDownload()}
              floated="right"
            >
              <Download className={styles.downloadIcon} />
            </Button>
          </Modal.Header>
          <Modal.Content image>
            <img
              src={`http://localhost:5000${props.imgURL}`}
              key={props.user}
              className={styles.biggerImage}
            ></img>
            <Modal.Description style={{ marginLeft: "50px" }}>
              <Header>Comments</Header>
              <Comment imgURL={props.imgURL} />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              className="red ui button"
              onClick={() => setModal(false)}
              style={{ marginLeft: "0px" }}
            >
              <Icon name="external alternate" />
              Leave
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </>
  );
};

export default Photo;
