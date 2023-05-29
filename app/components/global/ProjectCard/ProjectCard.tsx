import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import Button from "../Button/Button";

type ProjectCardProps = {
  projectTitle: string;
  tech: string | [];
  description: string;
  imageURL: string;
  projectURL: string;
};

const ProjectCard = ({
  projectTitle,
  tech,
  description,
  imageURL,
  projectURL,
}: ProjectCardProps) => {
  return (
    <div className={styles.maincard}>
      <div className={styles.behindcard}></div>
      <div className={styles.frontcard}>
        <div className={styles.cardtop}>
          <Image
            src={imageURL}
            alt='Image'
            width={180}
            height={100}
            className={styles.card_image}
          />
          <span className={styles.card_tags}>{tech}</span>
          <h3 className={styles.card_title}>{projectTitle}</h3>
          <p className={styles.card_desc}>{description}</p>
        </div>
        <a href={projectURL} target='_blank' rel='nofollow'>
          {" "}
          <Button placeholder='View Project' version='secondary' />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
