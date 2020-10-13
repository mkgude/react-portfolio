import React from "react";
import Footer from "../Footer";
import "../../styles/style.css";
import Image from "../../img/profile-crop-2.jpg";
function About() {
  return (
    <div>
      <main class="container" id="main-section">
        <h2>About Me</h2>
        <hr />
        <div class="row">
          <div class="col">
            <img
              src={Image}
              class="rounded float-left"
              id="profile-image"
              alt="profileimage"
            />
            <p>
              Hi! My name is Marian Gude and I am a full-stack web developer
              living in New York City. I aspire to build beautiful websites and
              help you achieve your goals in having a great experience for your
              clients and visitors.
            </p>
            <p>
              Outside of my aspirations to be a great web developer, I also love
              to bake, hang out with my family and friends and attempt to be
              outside as much as possible. I love to travel and have seen all
              but one state in the US. Always available or travel chats and
              questions too!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default About;
