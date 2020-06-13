import React from "react";
import styles from "./gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image1}>
        <img src={require("./photo-1.jpg")} className={styles.image}></img>
      </div>
      <div className={styles.image2}>
        <img src={require("./photo-2.jpg")} className={styles.image}></img>
      </div>
      <div className={styles.image3}>
        <img src={require("./photo-3.jpg")} className={styles.image}></img>
      </div>
      <div className={styles.image4}>
        <img src={require("./photo-4.jpg")} className={styles.image}></img>
      </div>
      <div className={styles.image5}>
        <img src={require("./photo-5.jpg")} className={styles.image}></img>
      </div>
    </div>
  );
};

export default Gallery;
