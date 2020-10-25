import React from "react";
import "../styles/style.css";
import "./header.css";
import planeImage from "../img/airplane-11-128.png";
import Fade from "react-reveal/Fade"

function HeaderTwo() {
  // navigation that appears on every page

  return (
    <navbar className="header-wrap navbar-measurments">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="header-plane-image">
            <Fade left>
                <img src={planeImage} alt="plane"/>
            </Fade>
        </div>
        <h1 className="header-title">Air Marian</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse my-2 justify-content-end" id="navbarTogglerDemo02">
            <ul className="nav justify-content-end">
            <li className="nav-item active">
                <a className="nav-link" href="/about">About <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/porfolio">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contact2">Contact</a>
            </li>
            </ul>
        </div>
      </nav>
    </navbar>  
  );
}
export default HeaderTwo;
