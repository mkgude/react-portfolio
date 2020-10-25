import React from "react";
import Header from "../components/Header";
import "./contact2.css";
import linkedin from "../img/linkedin-logo.png";
import gitHub from "../img/iconfinder_github_1220319.png";
import emailEnvelope from "../img/iconfinder_Mail_4473016.png";
import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card"

function ContactTwo() {
  return (
    <div>
      <Header />
      <hr />
      <Container className="main-container" id="contact-section">
        <h2>Contact</h2>
        <p className="contact-text">
        Drop us a line or give us a ring. We love to hear about your Air Marian experience and are happy to answer any questions.
        </p>
        <Row className="contact-card-div">
            <Card className="contact-card">
                <Card.Img src={linkedin} className="icon" id="linkedin-icon"alt="linkedin"/>
                <Card.Text>Connect with us</Card.Text>
                <a href="https://www.linkedin.com/in/mkgude">
                <Card.Title>LinkedIn/mkgude</Card.Title></a>
            </Card>
            <Card className="contact-card">
                <Card.Img src={gitHub} className="icon" id="github-icon" alt="github"/>
                <Card.Text>See our activity</Card.Text>
                <a href="https://github.com/mkgude"> 
                    <Card.Title>GitHub/mkgude</Card.Title>
                </a>
            </Card>
            <Card className="contact-card">
                <Card.Img src={emailEnvelope} className="icon" id="email-icon" alt="email"/>
                <Card.Text>Write to us</Card.Text>
                <a href="mailto:mkgude@gmail.com">
                    <Card.Title>mkgude@gmail.com</Card.Title>
                </a>
            </Card>
        </Row>
      </Container>
    </div>
  );
}
export default ContactTwo;
