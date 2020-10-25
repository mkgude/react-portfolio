import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Welcome from "./pages/Welcome";
import Footer from "./components/Footer";
import ContactTwo from "./pages/Contact2";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact2" component={ContactTwo} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
