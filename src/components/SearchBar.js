import React from "react";
import styles from "./searchbar.module.scss";

const SearchBar = () => {
  return (
    <form className={styles.container}>
      <input
        type="text"
        placeholder="What are you looking for? :)"
        className={styles.searchbar}
      ></input>
      <button className={styles.submit}>
        <div className={styles.loupe}></div>
      </button>
    </form>
  );
};

export default SearchBar;
