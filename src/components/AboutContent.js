import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";
import front from "../assets/frontend.png";
import sam from "../assets/samir.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
        I'm Samir Kumar, a Frontend Developer. I use HTML, CSS, JavaScript, ReactJS, WordPress & etc technologies for Frontend development. I have been a B.Tech student. I started my career with my internship where I used to do frontend development. I did this internship in 2019. Since then I have been doing frontend development continuously. 
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
        <button className="btn btn-light">
            <a href="/samir-kumar.pdf" download> Download Resume</a>
        </button>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={sam} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={front} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
