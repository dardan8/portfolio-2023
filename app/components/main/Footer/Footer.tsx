import React from "react";
import styles from "./Footer.module.scss";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import Link from "next/link";
const date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.text}>© {date} Dardan Dara </div>
      <div className={styles.social}>
        <Link href='https://www.linkedin.com/in/dardandara/' target='_blank'>
          <RiLinkedinBoxFill className={styles.social_icon} />
        </Link>
        <Link href='https://github.com/dardan8/' target='_blank'>
          <RiGithubFill className={styles.social_icon} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
