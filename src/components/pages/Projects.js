import React from "react";
import Footer from "../Footer";
import ProjectCard from "../ProjectCard";
import "../../styles/style.css";
import image from "../../img/lemonstree.jpg";

function Projects() {
  return (
    <div>
      <main className="container" id="main-section">
        <h2>Portfolio</h2>
        <hr />
        <div className="row row-cols-1 row-cols-md-2">
          <ProjectCard
            href="https://radiant-scrubland-65764.herokuapp.com/"
            title="Happy Cloud"
            description="Use our journal to add your daily word of gratitude"
            alt="gratitude journal"
            image={image}
            github="https://github.com/JessicaPerez1/Happy-Cloud"
          />
          <ProjectCard
            href="https://dry-mountain-53041.herokuapp.com/"
            title="Employee Roster"
            description="Search through your employee roster by name to find your team!"
            alt="employee roster"
            image={image}
            github="https://github.com/mkgude/employee-roster"
          />
          <ProjectCard
            href="https://stormy-dawn-09058.herokuapp.com/"
            title="The BeeHive"
            description="Connect with local NonProfits who need assistance with their websites and technology. This is a place for volunteers to share skills and gain experience."
            alt="beehive"
            image={image}
            github="https://github.com/mkgude/Stormy-Dawn"
          />
          <ProjectCard
            href="https://evening-escarpment-30021.herokuapp.com/"
            title="Burger Joint"
            description="What type of burger do you want?!"
            alt="burger joint"
            image={image}
            github="https://github.com/mkgude/burger_joint"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Projects;
