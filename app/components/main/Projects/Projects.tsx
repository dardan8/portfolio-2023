import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../../global/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.projectspace}>
        <ProjectCard project='/images/projects/pomodoro.png' />
        <ProjectCard project='/images/projects/Blog_Image.png' />
        <ProjectCard project='/images/projects/pomodoro.png' />
        <ProjectCard project='/images/projects/pomodoro.png' />
        <ProjectCard project='/images/projects/pomodoro.png' />
        <ProjectCard project='/images/projects/pomodoro.png' />
      </div>
    </div>
  );
};

export default Projects;
