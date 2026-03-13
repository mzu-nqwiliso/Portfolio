import React from "react";
import "./ProjectSection.css";
import Project from "../Project/Project";

export default function ProjectSection({ projects }) {
  return (
    <section className="project-section container" id="work">
      <h2 className="section-header">Selected Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
