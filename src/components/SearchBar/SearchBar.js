import React, { useState, useEffect } from "react";
import axios from "axios";
import Gstyles from "../Gallery/gallery.module.scss";
import styles from "./searchbar.module.scss";
import Photo from "../Photo/Photo";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    axios({
      method: "GET",
      url: `/photos`,
    })
      .then(async (res) => {
        await setData(res.data.reverse());
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredPhotos = data.filter((data) => {
    return data.tags.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.slogan}>
          Download and share best photos in the internet.
        </h1>
        <form className={styles.container}>
          <input
            type="text"
            placeholder="What are you looking for? :)"
            className={styles.searchbar}
            onChange={(e) => setFilter(e.target.value)}
          ></input>
          {console.log(filter)}
          <div className={styles.submit}>
            <img src={require("../../Images/lupa.png")}></img>
          </div>
        </form>
      </div>
      <div className={Gstyles.Gcontainer}>
        {filteredPhotos.map((item) => (
          <Photo
            imgURL={item.imgURL}
            user={item.user}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
