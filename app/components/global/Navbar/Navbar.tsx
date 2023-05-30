import React from "react";
import styles from "./Navbar.module.scss";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <a href='#tools'>Tools</a>
        </li>
        <li>
          {" "}
          <a href='#projects'>Projects</a>
        </li>
        <li>
          {" "}
          <a href='#experience'>Experience</a>
        </li>
      </ul>
      <Button placeholder='Get in Touch' version='main' />
    </div>
  );
};

export default Navbar;
