import React from "react";
import "./footer.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import github from "../img/iconfinder_github_1220319.png";
import emailEnvelope from "../img/email-icon.png";
import linkedin from "../img/linkedin-logo.png";

function Footer() {
  return (
    <Navbar className="container footer justify-content-center" sticky="bottom">
      <Nav className="mr-auto nav footer justify-content-center footer-edits">
          <a
            className="nav-link active footer-link"
            href="https://www.linkedin.com/in/mkgude"
            target="blank"
          >
            <img className="icons" src={linkedin} alt="linkedin icon" />
          </a>
          <a
            className="nav-link footer-link"
            href="https://github.com/mkgude"
            target="blank"
          >
            <img className="icons" src={github} alt="github icon" />
          </a>
          <a
            className="nav-link footer-link"
            href="mailto:mkgude@gmail.com"
            target="blank"
          >
            <img className="icons" src={emailEnvelope} alt="email icon" />
          </a>
      </Nav>
    </Navbar>
  );
}
export default Footer;
