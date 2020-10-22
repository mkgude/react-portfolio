import React from "react";
import Footer from "../components/Footer";
import "./contact.css";
import linkedin from "../img/linkedin2.png";
import gitHub from "../img/github2.png";
import emailEnvelope from "../img/email2.png";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <Container className="main-container" id="contact-section">
        <h2>Contact</h2>
        <hr />
        <p className="contact-text">
          Interested in getting in touch? Use the links below!
        </p>
        <div className="contact-icons row">
          <div className="contact-div col-sm-4">
            <div className="background-img">
              <a href="https://www.linkedin.com/in/mkgude">
                <img
                  src={linkedin}
                  className="icon"
                  id="linkedin-icon"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
          <div className="contact-div col-sm-4">
            <div className="background-img">
              <a href="https://github.com/mkgude">
                <img
                  src={gitHub}
                  className="icon"
                  id="github-icon"
                  alt="github"
                />
              </a>
            </div>
          </div>
          <div className="contact-div col-sm-4">
            <div className="background-img">
              <a href="mailto:mkgude@gmail.com">
                <img
                  src={emailEnvelope}
                  className="icon"
                  id="linkedin-icon"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Contact;
