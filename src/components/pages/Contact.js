import React from "react";
import Footer from "../Footer";
import "../../styles/style.css";

function Contact() {
  return (
    <div>
      <main id="main-section">
        <form
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
          <input
            class="btn btn-primary submit-button"
            type="submit"
            value="Submit"
          />
        </form>
      </main>
      <Footer />
    </div>
  );
}
export default Contact;
