import React from "react";
import { NavLink } from "react-router-dom";

const WorkCart = (props) => {
  return (
    <div>
      <div className="main-container">
        <div className="work-img">
          <img src={props.imgSrc} alt={props.title} />
        </div>
        <div className="work-title">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="pro-btn">
        <NavLink to={props.view} className="btn" target="_blank">
            View
          </NavLink>
          <NavLink to={props.source} className="btn" target="_blank">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCart;
