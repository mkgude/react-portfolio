import React from "react";
import "./header.css";
import planeImage from "../img/airplane-11-128.png";
import Fade from "react-reveal/Fade"

function Header() {
  // navigation that appears on every page

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand header-info" href="/about">
        <div className="header-plane-image">
            <Fade left>
                <img className="plane-image" src={planeImage} alt="plane"/>
            </Fade>
        </div>
        <h1 className="header-title">Marian Gude</h1>
      </a>
      <button class="navbar-toggler justify-content-end" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon justify-content-end"></span>
      </button>
      <div class="collapse navbar-collapse nav justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
          <a className="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a className="nav-link" href="/projects">Portfolio</a>
          </li>
          <li class="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>


    
  );
}
export default Header;
