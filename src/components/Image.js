import React, { useState } from "react";
import styles from "./image.module.scss";
import Download from "@material-ui/icons/SystemUpdateAlt";

const Image = (props) => {
  const [hover, setHover] = useState(false);

  const handleEnter = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
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
          <button className={styles.downloadButton}>
            <Download className={styles.downloadIcon} />
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

export default Image;
