import React from "react";
import "../styles/style.css";

function ProjectCard(props) {
  return (
    <div className="col mb-4">
      <div className="card card-width">
        <a href={props.href}>
          <img
            src={props.image}
            className="card-img-top porfolio-img"
            alt={props.alt}
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
