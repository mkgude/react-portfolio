import React from "react";
import Footer from "../Footer";
import "../../styles/style.css";
import linkedin from "../../img/linkedin2.png";
import gitHub from "../../img/github2.png";
import emailEnvelope from "../../img/email2.png";

function Contact() {
  return (
    <div>
      <main className="container" id="contact-section">
        <h2>Contact</h2>
        <hr />
        <p className="contact-text">Get in touch!</p>
        <div className="contact-icons row">
          <div className="contact-div col-sm-4">
            <div className="background-img">
              <a href="https://www.linkedin.com/in/mkgude">
                <img
                  src={linkedin}
                  className="icon"
                  id="linkedin-icon"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
          <div className="contact-div col-sm-4">
            <div className="background-img">
              <a href="https://github.com/mkgude">
                <img
                  src={gitHub}
                  className="icon"
                  id="github-icon"
                  alt="github"
                />
              </a>
            </div>
          </div>
          <div className="contact-div col-sm-4">
            <div className="background-img">
              <a href="mailto:mkgude@gmail.com">
                <img
                  src={emailEnvelope}
                  className="icon"
                  id="linkedin-icon"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
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
