import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "../../global/ProjectCard/ProjectCard";
import { projects } from "../../../data/data";

const Projects = () => {
  return (
    <div className={styles.projects} id='projects'>
      <h3 className={styles.projects_title}>Projects</h3>
      <div className={styles.projectspace}>
        <div className={styles.projectspace_gradient}>
          {projects.map((project) => {
            return (
              <ProjectCard
                projectTitle={project.project_title}
                tech={project.project_technologies.join(", ")}
                description={project.project_description}
                projectURL={project.project_url}
                imageURL={project.project_image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
