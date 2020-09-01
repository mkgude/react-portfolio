import React from "react";
import Footer from "../Footer";

function About() {
  return (
    <div>
      <main class="container" id="main-section">
        <h2>About Me</h2>
        <hr />
        <div class="row">
          <div class="col">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQEmhJ3pgYkLCg/profile-displayphoto-shrink_400_400/0?e=1599091200&v=beta&t=CO5STGmoJmCasSQ5pIRgmD_Gg4WDbonojQw7HxMA2F4"
              class="rounded float-left"
              id="profile-image"
              alt="profileimage"
            />
            <p>
              Hi! My name is Marian Gude and I am a web developer in training
              living in New York City.
            </p>
            <p>
              Before I started to focus in web development, I was a client
              success manager working in the healthcare space. I enjoy
              collaborating with others to create and innovate, so decided to
              turn my hobby into a career path.
            </p>
            <p>
              My goal as a web developer is to build you a beautiful website
              with a great user experience!
            </p>
            <p>
              Outside of my aspirations to be a great web developer, I also love
              to bake, hang out with my family and friends and attempt to be
              outside as much as possible. I love to travel and have see every
              state in the US, feel free to contact me for travel tips too!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default About;
