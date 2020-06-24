import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./gallery.module.scss";
import Image from "./Image";
const Gallery = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `/photos`,
    })
      .then(async (res) => {
        await setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Image
          imgURL={item.imgURL}
          user={item.user}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Gallery;
