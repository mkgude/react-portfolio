import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Welcome from "./pages/Welcome";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
