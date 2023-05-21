import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  project: string;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.maincard}>
      <div className={styles.behindcard}></div>
      <div className={styles.frontcard}>
        <div>
          <span className={styles.card_tags}>NextJS, ReactJS, SCSS</span>
          <h3 className={styles.card_title}>Pomodoro App</h3>
          <p className={styles.card_desc}>
            Pomodoro app to boost your productivity. Designed and developed by
            me
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
