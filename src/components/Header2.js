import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/style.css";
import "./header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import planeLogo from "../img/airplane-5-16.png";
import planeImage from "../img/airplane-11-128.png";
import Fade from "react-reveal/Fade"

function HeaderTwo() {
  // navigation that appears on every page
  const location = useLocation();

  return (
    <Navbar className="header-wrap navbar-measurments">
      <Nav className="navbar navbar-light bg-light header-width">
        <div className="header-plane-image">
            <Fade left>
                <img src={planeImage} alt="plane"/>
            </Fade>
        </div>
        <h1>Air Marian</h1>
        <Dropdown className="justify-content-end dropdown">
          <Dropdown.Toggle
            className="dropdown-button justify-content-end"
            variant="light"
          >
            <img className="menu-icon" src={planeLogo} alt="menu dropdown" />
          </Dropdown.Toggle>

          <Dropdown.Menu menuAlign="right" id="dropdown-menu-align-right">
            <Dropdown.Item>
              <Link
                to="/about"
                className={
                  location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/projects"
                className={
                  location.pathname === "/projects"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}
export default HeaderTwo;
