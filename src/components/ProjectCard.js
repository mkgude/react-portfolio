import React from "react";
import "./projectcard.css";
import Projects from "../projects.json";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
// import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

function ProjectCard() {
  return (
    <Row className="projectcard-row" xl={4}>
      {Projects.map((project) => (
        <Col className="card-col" md={4} lg={4} key={project.id}>
          <Card className="card project-card">
            <a href={project.href}>
              <Card.Img
                src={project.image}
                className="card-img-top porfolio-img"
                alt={project.alt}
              />
            </a>
            <Card.Body>
              <Card.Title className="title">{project.title}</Card.Title>
              <a
                className="nav-link github-button"
                href={project.github}
                target="blank"
              >
                <p className="github-text">GitHub Repository</p>
              </a>
              <Card.Text className="card-text technologies-text">
                {project.technologies}
              </Card.Text>
              <Card.Text className="card-text">{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProjectCard;
