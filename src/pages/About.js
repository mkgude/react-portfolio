import React from "react";
import Header from "../components/Header";
import "../styles/style.css";
import "./about.css";
import Image from "../img/profile-crop-2.jpg";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <div>
      <Header />
      <Container className="main-container" id="main-section">
        <h2>About Me</h2>
        <hr />
        <Row className="row">
          <Col className="col">
            <img
              src={Image}
              className="rounded float-left"
              id="profile-image"
              alt="profileimage"
            />
            <div className="about-content">
              <p>
                Hi! My name is Marian Gude and I am a full-stack web developer
                living in New York City. I aspire to help you achieve your goals
                for flawless UX/UI design and with clean code to back it!
              </p>
              <p>
                Outside of my aspirations to be the web developer you need, I
                also love to bake, hang out with my family and friends and
                attempt to be outside as much as possible. I love to travel and
                have seen all but one state in the US.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default About;
