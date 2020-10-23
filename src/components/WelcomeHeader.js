import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/style.css";
import "./header.css";
import Nav from "react-bootstrap/Nav";

function Header() {
  // navigation that appears on every page
  const location = useLocation();

  return (
      <Nav className="navbar navbar-light bg-light header-width">
        <Nav.Item>
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
        </Nav.Item>
        <Nav.Item>
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
        </Nav.Item>
        <Nav.Item>
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
        </Nav.Item>
      </Nav>
  );
}
export default Header;
