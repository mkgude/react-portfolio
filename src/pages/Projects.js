import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import "./projects.css";

function Projects() {
  return (
    <div>
      <Container className="container" id="main-section">
        <h2>Portfolio</h2>
        <hr />
        <ProjectCard />
      </Container>
      <Footer />
    </div>
  );
}
export default Projects;
