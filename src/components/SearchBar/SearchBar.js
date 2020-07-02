import React from "react";
import styles from "./searchbar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.slogan}>
        Download and share best photos in the internet.
      </h1>
      <form className={styles.container}>
        <input
          type="text"
          placeholder="What are you looking for? :)"
          className={styles.searchbar}
        ></input>
        <button className={styles.submit}>
          <img src={require("../../Images/lupa.png")}></img>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
