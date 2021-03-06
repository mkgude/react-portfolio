import React, {Component} from "react";
import {Link} from "react-router-dom"

import "./welcome.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Container, Jumbotron } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import logo from "../img/logoairmarian.jpg";
import planeImage from "../img/airplane-11-256.gif";

const wordArray = ["Bienvenue", "Willkommen", "Welcome", "Benvenuto",  "Välkommen", "Hoş geldin", "Bienvenido", "Witaj", "Selamat datang", "Добро пожаловать", "어서 오십시오", "Bem-vindo", "ようこそ - Yōkoso"]

class Welcome extends Component {

  state = { textIdx: 0 };

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 2500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = wordArray[this.state.textIdx % wordArray.length];

    return (
    <div>
      <Container className="welcome-container">
        <div className="welcome-plane-image">
          <Fade left>
            <img src={planeImage} alt="plane"/>
          </Fade>
        </div>
        <Jumbotron className="welcome">
          <p className="welcome-text">{textThatChanges}</p> 
          <Link to ="/">
            <h2 className="welcome-title">to <span>Air Marian</span></h2>
          </Link>
          <h4>An experience like no other!</h4>
          <p className="welcome-message">Ready for a journey? Take a look around! Please see the options below to take you into our site.</p>
        </Jumbotron>
        <hr/>
        <Container className="options">
          <Row>
            <Col>
              <Row>
                <Card.Body className="option-item">
                  <Link to ="/about">About</Link>
                </Card.Body>
                <Card.Body className="option-item">
                  <Link to ="/projects">Entertainment</Link>
                </Card.Body>
                <Card.Body className="option-item">
                  <Link to ="/contact">Book Now!</Link>
                </Card.Body>
                <Card.Body className="option-item">More</Card.Body>
              </Row>
              <Row>
              </Row>
            </Col>
          </Row>
          <Row className="logo-row">
            <img className="large-logo" src={logo} alt="air marian logo" />
          </Row>
        </Container>
      </Container>
    </div>
  )};
}
export default Welcome;
