import "./Hero.css";
import HeroImg from "../assets/hero.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
      <div className="hero">
        <div className="mask">
          <img className="into-img" src={HeroImg} alt="HeroImg" />
        </div>
        <div className="content">
          <p>Hi, I'm Samir Kumar</p>
          <h1>Frontend Developer</h1>
          <div>
            <Link to="/projects" className="btn">
              Project
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Hero;
