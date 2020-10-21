import React from "react";
import "./projectcard.css";
import Projects from "../projects.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
// import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

function ProjectCard() {
  return (
    <Row>
      {Projects.map((project) => (
        <Col className="card-col" xs={6} md={4} key={project.id}>
          <Card className="card">
            <a href={project.href}>
              <Card.Img
                src={project.image}
                className="card-img-top porfolio-img"
                alt={project.alt}
              />
            </a>
            <Card.Body>
              <Card.Title className="title">{project.title}</Card.Title>
              <Card.Text className="card-text">{project.description}</Card.Text>
              <Card.Text className="card-text">
                {project.technologies}
              </Card.Text>
              <a className="nav-link" href={project.github} target="blank">
                <Button
                  type="button"
                  variant="outline-secondary"
                  class="btn btn-outline-secondary github-button"
                >
                  GitHub Link
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProjectCard;
