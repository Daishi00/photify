import React, { useState } from "react";
import styles from "./image.module.scss";

const Image = (props) => {
  const [hover, setHover] = useState(false);

  const handleEnter = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {hover === true && (
          <div className={styles.imageInfo}>
            <p>By: {props.user}</p>
          </div>
        )}
        <div className={styles.image}>
          <img
            src={`http://localhost:5000${props.imgURL}`}
            key={props.user}
            onMouseEnter={() => handleEnter()}
            onMouseLeave={() => handleLeave()}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Image;
