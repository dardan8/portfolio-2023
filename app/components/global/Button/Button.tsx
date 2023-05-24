import React from "react";
import styles from "./Button.module.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

type ButtonProps = {
  placeholder: string;
  version: "main" | "secondary";
};
const Button = ({ placeholder, version }: ButtonProps) => {
  return (
    <button
      className={`${version === "main" ? styles.button1 : styles.button2}`}
    >
      {placeholder} {""}
      {/* <BsFillArrowRightCircleFill className={styles.icon} /> */}
    </button>
  );
};

export default Button;
