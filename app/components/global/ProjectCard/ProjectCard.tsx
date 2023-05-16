import React from "react";
import styles from "./ProjectCard.module.scss";
const ProjectCard = () => {
  return (
    <div className={styles.maincard}>
      <div className={styles.behindcard}></div>
      <div className={styles.frontcard}>Card front</div>
    </div>
  );
};

export default ProjectCard;
