import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img">
        <img src="../images/hero_img.png" alt="" />
      </div>
      <div className="hero-intro">
        <h1>Join Existing Meeting</h1>
        <Link to={"join"}>
          <input type="button" value="Join" className="hero-btn" />
        </Link>

        <Link to={"signup"}>
          <input type="button" value="Sign Up" className="hero-btn" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
