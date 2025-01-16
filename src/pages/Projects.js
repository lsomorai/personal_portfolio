import React, { useState } from "react";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";
import ProjectModal from "../components/ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>
      <div className="project-grid">
        {ProjectList.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}

export default Projects;