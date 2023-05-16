import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../../global/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <ProjectCard />
      <ProjectCard />

      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default Projects;
