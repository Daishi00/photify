import React, { useState } from "react";
import styles from "./photo.module.scss";
import Download from "@material-ui/icons/SystemUpdateAlt";
import fileDownload from "js-file-download";
import axios from "axios";

const Photo = props => {
  const [hover, setHover] = useState(false);
  const [like, setLike] = useState(false);

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

  return (
    <div
      className={styles.imageContainer}
      onMouseEnter={() => handleEnter()}
      onMouseLeave={() => handleLeave()}
    >
      {hover === true && (
        <div className={styles.imageInfo}>
          <div className={styles.opacity} />
          <p className={styles.user}>{props.user}</p>
          <p className={styles.description}>{props.description}</p>
          <button
            className={styles.downloadButton}
            onClick={() => handleDownload()}
          >
            <Download className={styles.downloadIcon} />
          </button>

          <button
            className={`${styles.likeButton} ${like === true &&
              styles.likeTrue}`}
            onClick={() => handleLike()}
          >
            {like === false && (
              <i className={`heart outline icon ${styles.heart}`} />
            )}
            {like === true && <i className={`heart icon ${styles.heart}`} />}
            {like === false && props.likes}
            {like === true && props.likes + 1}
          </button>
        </div>
      )}
      <img
        src={`http://localhost:5000${props.imgURL}`}
        key={props.user}
        styles={{ opacity: 0 }}
      ></img>
    </div>
  );
};

export default Photo;
