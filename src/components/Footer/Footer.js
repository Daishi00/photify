import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>About us</li>
          <li>Contact</li>
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
