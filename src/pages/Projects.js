import React from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import "./projects.css";

function Projects() {
  return (
    <div>
      <Header />
      <hr />
      <Container className="main-container projects-pg" id="portfolio-section">
        <h2>Portfolio</h2>
        <ProjectCard />
      </Container>
    </div>
  );
}
export default Projects;
