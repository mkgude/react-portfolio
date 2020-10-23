import React, { Component } from "react";
import "./birthflower.css";
import month from "../birthflower.json";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class BirthFlower extends Component {
  state = {
    month: month,
    search: "",
  };

  renderMonth = () => {
    this.setState({
      month: month.filter((month) => {
        return month.month
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      }),
    });
  };

  onchange = (e) => {
    this.setState({ search: e.target.value }, () => this.renderMonth());
    console.log(this.state.search);
  };
  render() {
    return (
      <div>
        <div className="search">
          <h2>Type in your month below...</h2>
          <input
            className="form-control input"
            type="text"
            onChange={this.onchange}
            value={this.state.search}
            placeholder="Month"
            aria-label="Search"
          />
        </div>
        <Row>
          {this.state.month.map((month) => (
            <Col className="card-col" xs={6} md={4} key={month.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={month.flowerImage}
                  alt={month.flower}
                />
                <Card.Body>
                  <Card.Title>{month.flower}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Month: {month.month}
                  </Card.Subtitle>
                  <Card.Text>{month.funfacts}</Card.Text>
                  <Button variant="primary">Go to portfolio</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default BirthFlower;
