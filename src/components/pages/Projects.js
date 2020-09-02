import React from "react";
import Footer from "../Footer";
import ProjectCard from "../ProjectCard";
import "../../styles/style.css";
import image from "../../img/lemons-tree.jpg";

function Projects() {
  return (
    <div>
      <main className="container" id="main-section">
        <h2>Portfolio</h2>
        <hr />
        <div className="row row-cols-1 row-cols-md-2">
          <ProjectCard
            href="https://mkgude.github.io/marian-mike-jessica-camrynne-Joke-Factory/"
            title="'Inside' Joke"
            description="Need a laugh? Use our joke generator to get jokes at the drop of
              a hat!"
            alt="inside joint"
            image={image}
          />
          <ProjectCard
            href="https://github.com/mkgude/hw10-team-dashboard"
            title="Team Generator"
            description="Utilize this tool in node.js to generate an html page of your team and their information."
            alt="team generator"
            image={image}
          />
          <ProjectCard
            href="https://stormy-dawn-09058.herokuapp.com/"
            title="The BeeHive"
            description="Connect with local NonProfits who need assistance with their websites and technology. This is a place for volunteers to share skills and gain experience."
            alt="beehive"
            image={image}
          />
          <ProjectCard
            href="https://dry-mountain-53041.herokuapp.com/"
            title="Employee Roster"
            description="Search through your employee roster by name to find your team!"
            alt="employee roster"
            image={image}
          />
          <ProjectCard
            href="https://evening-escarpment-30021.herokuapp.com/"
            title="Burger Joint"
            description="What type of burger do you want?!"
            alt="burger joint"
            image={image}
          />
          <ProjectCard
            href="https://evening-escarpment-30021.herokuapp.com/"
            title="Budget Tracker"
            description="A way to track how much money is coming in and out of your pocket!"
            alt="budget tracker"
            image={image}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Projects;
