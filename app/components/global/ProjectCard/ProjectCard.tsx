import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import Button from "../Button/Button";

type ProjectCardProps = {
  project: string;
  tech: string;
  title: string;
  description: string;
  imageURL: string;
};

const ProjectCard = ({
  project,
  tech,
  title,
  description,
  imageURL,
}: ProjectCardProps) => {
  return (
    <div className={styles.maincard}>
      <div className={styles.behindcard}></div>
      <div className={styles.frontcard}>
        <div className={styles.cardtop}>
          <Image
            src='/images/projects/pomodoro.png'
            alt='Image'
            width={170}
            height={50}
          />
          <span className={styles.card_tags}>{tech}</span>
          <h3 className={styles.card_title}>{project}</h3>
          <p className={styles.card_desc}>{description}</p>
        </div>
        <Button placeholder='View Project' version='secondary' />
      </div>
    </div>
  );
};

export default ProjectCard;
