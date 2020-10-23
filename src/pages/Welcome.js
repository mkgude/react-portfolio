import React from "react";
import BirthFlower from "../components/BirthFlower";
import "./welcome.css";

function Welcome() {
  return (
    <div>
      <h2>Welcome to Marian's Portfolio</h2>
      <h5>Before entering my portfolio, learn about your birthday flower!</h5>
      <BirthFlower />
    </div>
  );
}
export default Welcome;
