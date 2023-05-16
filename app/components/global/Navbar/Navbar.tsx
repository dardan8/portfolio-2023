import React from "react";
import styles from "./Navbar.module.scss";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <ul>
        <li>Tools</li>
        <li>Projects</li>
        <li>Experience</li>
      </ul>
      <Button />
    </div>
  );
};

export default Navbar;
