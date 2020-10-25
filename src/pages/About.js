import React, {Component} from "react";
import Header from "../components/Header";
import "../styles/style.css";
import "./about.css";
import Image from "../img/profile-crop-2.jpg";
import { Col, Container, Row } from "react-bootstrap";

const techSkillsArray = ["React.js", "Node.js", "Express", "HTML5", "CSS3", "JavaScript", "GitHub", "Heroku", "MySQL", "Bootstrap", "MongoDB", "JQuery", "JSON", "AJAX", "3rd Party APIs"]

const businessSkillsArray = ["Collaborator", "Initiator", "Organizer", "Flexible", "Persistent", "Consistent", "Problem Solver", "Reliable", "Strong Communicator", "Cross-Departmental Communication", "Client-Facing Communication", "Salesforce", "Taskray"]

class About extends Component {
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
    let techSkills = techSkillsArray[this.state.textIdx % techSkillsArray.length];
    let businessSkills = businessSkillsArray[this.state.textIdx % businessSkillsArray.length]
    
    return (
    <div>
      <Header />
      <hr />
      <Container className="main-container" id="about-section">
        <h2>About Me</h2>
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
              <p>My technology skills include: <span>{techSkills}</span></p>
              <p>Skills I contribute as a team member and employee: <span>{ businessSkills}</span></p>
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
  )};
}
export default About;
