import React from "react";
import Footer from "../Footer";
import ProjectCard from "../ProjectCard";

function Projects() {
  return (
    <div>
      <h1>Projects go here</h1>
      <div class="row row-cols-1 row-cols-md-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      {/* // contains the links to projects // contains footer component */}
      <Footer />
    </div>
  );
}
export default Projects;
