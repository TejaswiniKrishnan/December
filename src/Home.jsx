import { Link } from "react-router-dom";
import React from "react";
import About from "./About";
const Home = () => {
  return (
    <div>
      <h3>WELCOME</h3>
      <Link to="/About">ABOUT</Link>
    </div>
  );
};

export default Home;
