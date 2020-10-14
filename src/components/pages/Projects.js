import React from "react";
import Footer from "../Footer";
import ProjectCard from "../ProjectCard";
import "../../styles/style.css";
import image1 from "../../img/happycloudimg.png";
import image2 from "../../img/timemagimg.png";
import image3 from "../../img/beehiveimg.png";
import image4 from "../../img/bluebrgrimg.png";

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
            description="Use our journal to add your daily word of gratitude. Once you have a few days completed, utilize the wordcloud generator to see a mix of your gratefulness."
            technologies="Technologies Used: React, HTML, CSS, Javascript, Material-UI, 3rd Party APIs, MongoDB, Node.js, Express.js, JSON"
            alt="gratitude journal"
            image={image1}
            github="https://github.com/JessicaPerez1/Happy-Cloud"
          />
          <ProjectCard
            href="https://dry-mountain-53041.herokuapp.com/"
            title="Employee Roster"
            description="Search through your a roster by name to find your leading ladies of the last century!"
            technologies="Technologies Used: React, HTML, CSS, Javascript, JSON, Bootstrap"
            alt="employee roster"
            image={image2}
            github="https://github.com/mkgude/employee-roster"
          />
          <ProjectCard
            href="https://stormy-dawn-09058.herokuapp.com/"
            title="The BeeHive"
            description="Connect with local NonProfits who need assistance with their websites and technology. This is a place for volunteers to share skills and gain experience."
            technologies="Technologies Used: Javascript, HTML, CSS, MySQL, Node.js, Express.js"
            alt="beehive"
            image={image3}
            github="https://github.com/mkgude/Stormy-Dawn"
          />
          <ProjectCard
            href="https://salty-castle-86073.herokuapp.com/"
            title="Burger Joint"
            description="What type of burger do you want?! Use the buttons to devour your burger or add it back onto the list"
            technologies="Technologies Used: Javascript, HTML, CSS, Handlebars"
            alt="burger joint"
            image={image4}
            github="https://github.com/mkgude/burger_joint"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Projects;
