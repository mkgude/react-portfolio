import React from "react";

function ProjectCard() {
  return (
    <div class="col mb-4">
      <div class="card card-width">
        <a href="https://mkgude.github.io/marian-mike-jessica-camrynne-Joke-Factory/">
          <img
            src="Assets/lemons-tree.jpg"
            class="card-img-top porfolio-img"
            alt="project 1 joke generator"
          />
        </a>
        <div class="card-body">
          <h5 class="card-title">"Inside" Joke</h5>
          <p class="card-text">
            Need a laugh? Use our joke generator to get jokes at the drop of a
            hat!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
