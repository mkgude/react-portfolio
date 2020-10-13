import React from "react";
import Footer from "../Footer";
import "../../styles/style.css";
import linkedin from "../../img/linkedin-logo-png-1836.png";
import gitHub from "../../img/github.png";
import portfolio from "../../img/portfolio-fav.png";
import emailEnvelope from "../../img/email-icon.png";

function Contact() {
  return (
    <div>
      <main className="container" id="contact-section">
        <h2>Contact</h2>
        <hr />
        <div className="contact-icons">
          <a href="mailto:mkgude@gmail.com">
            <img
              src={emailEnvelope}
              className="rounded icon"
              id="linkedin-icon"
              alt="linkedin"
            />
          </a>
          <a href="https://www.linkedin.com/in/mkgude">
            <img
              src={linkedin}
              className="rounded icon"
              id="linkedin-icon"
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/mkgude">
            <img
              src={gitHub}
              className="rounded icon"
              id="github-icon"
              alt="github"
            />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Contact;

{
  /* <form
  class="container"
  id="form-section"
  action="mailto:mkgude@gmail.com"
  method="post"
  enctype="text/plain"
>
  <h2>Contact</h2>
  <hr />
  <div class="form-group">
    <label for="exampleFormControlTextarea1" class="form-text">
      Name
    </label>
    <input
      type="name"
      class="form-control form-text"
      id="exampleFormControlTextarea1"
      placeholder="name"
    />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1" class="form-text">
      Email
    </label>
    <input
      type="email"
      class="form-control form-text"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1" class="form-text">
      Message
    </label>
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
    ></textarea>
  </div>
  <input class="btn btn-primary submit-button" type="submit" value="Submit" />
</form>; */
}
