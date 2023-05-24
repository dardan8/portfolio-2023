import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import Button from "../Button/Button";
import Image12 from "public/images/projects/pomodoro.png";
type ProjectCardProps = {
  project: string;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.maincard}>
      <div className={styles.behindcard}></div>
      <div className={styles.frontcard}>
        <div className={styles.cardtop}>
          <Image src={Image12} alt='Image' width={170} />
          <span className={styles.card_tags}>NextJS, ReactJS, SCSS</span>
          <h3 className={styles.card_title}>Pomodoro App</h3>
          <p className={styles.card_desc}>
            Pomodoro app to boost your productivity. Designed and developed by
            me
          </p>
        </div>
        <Button placeholder='View Project' version='secondary' />
      </div>
    </div>
  );
};

export default ProjectCard;
