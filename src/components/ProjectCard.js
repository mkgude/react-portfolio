import React from "react";
import "../styles/style.css";

function ProjectCard(props) {
  return (
    <div className="col sm-4">
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
          <p className="card-text">{props.technologies}</p>
          <a className="nav-link" href={props.github} target="blank">
            <button type="button" class="btn btn-outline-secondary">
              GitHub Link
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

// import React from "react";
// import "../styles/style.css";
// import Projects from "../projects.json";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";

// const projectCard = {
//   width: "400px",
//   float: "left",
// };

// function ProjectCard() {
//   return (
//     <Container className="project-card" style={projectCard}>
//       {Projects.map((project) => (
//         <Card>
//           <a href={project.href}>
//             <Card.Img
//               src={project.image}
//               className="card-img-top porfolio-img"
//               alt={project.alt}
//             />
//           </a>
//           <Card.Body>
//             <Card.Title>{project.title}</Card.Title>
//             <Card.Text className="card-text">{project.description}</Card.Text>
//             <Card.Text className="card-text">{project.technologies}</Card.Text>
//             <a className="nav-link" href={project.github} target="blank">
//               <Button type="button" class="btn btn-outline-secondary">
//                 GitHub Link
//               </Button>
//             </a>
//           </Card.Body>
//         </Card>
//       ))}
//     </Container>
//   );
// }

// export default ProjectCard;
