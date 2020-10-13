import React from "react";
import "../styles/style.css";

function Footer() {
  return (
    <div className="container">
      <ul className="nav justify-content-center footer-edits">
        <li className="nav-item">
          <a
            className="nav-link active footer-link"
            href="https://www.linkedin.com/in/mkgude"
            target="blank"
          >
            LinkedIN
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link footer-link"
            href="https://github.com/mkgude"
            target="blank"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
