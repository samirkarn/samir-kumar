import React from "react";
import "./Skills.css";
import { ProgressBar } from "react-bootstrap";

const Skills = () => {
  return (
    <div>
      <div className="skills-heading">
        <h1>Skills</h1>
      </div>
      <div className="skills">
        <div className="Skills">
          <div className="techs">
            <h3>HTML</h3>
            <ProgressBar variant="success" now={90} />
          </div>
          <div className="techs">
            <h3>CSS</h3>
            <ProgressBar variant="danger" now={75} />
          </div>
          <div className="techs">
            <h3>JavaScript</h3>
            <ProgressBar variant="warning" now={85} />
          </div>
          <div className="techs">
            <h3>React JS</h3>
            <ProgressBar variant="info" now={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
