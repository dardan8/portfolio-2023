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
      <a href='mailto:dardan.dara@gmail.com' target='_blank' rel='nofollow'>
        <Button placeholder='Get in Touch' version='main' />{" "}
      </a>
    </div>
  );
};

export default Navbar;
