import React, {Component} from "react";
import "./welcome.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Container, Jumbotron } from "react-bootstrap";

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
        <Jumbotron className="welcome">
          <p className="welcome-text">{textThatChanges}</p> 
          <h2 className="welcome-title">to Air Marian</h2>
          <p className="welcome-message">We are ready to take you on a journey, but first you should take a look around! Please see the selections below to take you into our site.</p>
        </Jumbotron>
        <Container className="seat-selections">
          <Row>
            <Col>
              <Row>
                {/* seats row 1 seat a and b */}
                <Card.Body className="seat">About</Card.Body>
                <Card.Body className="seat">Entertainment</Card.Body>
              </Row>
              <Row>
                {/* seats row 2 seat a and b */}
                <Card.Body className="seat">Book Now!</Card.Body>
                <Card.Body className="seat">More...</Card.Body>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
    )};
}
export default Welcome;
