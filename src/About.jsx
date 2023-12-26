import React from "react";
import Home from "./Home.jsx";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h2>Hello from about</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default About;
