import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import "./projects.css";

function Projects() {
  return (
    <div>
      <Container className="main-container projects-pg" id="main-section">
        <h2>Portfolio</h2>
        <hr />
        <ProjectCard />
      </Container>
    </div>
  );
}
export default Projects;
