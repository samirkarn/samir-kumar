import React from "react";
import "./Project.css";
import WorkCart from "./WorkCart";
import { workData } from "./WorkData";

const Project = () => {
  const works = workData.map((item) => (
    <WorkCart
      key={item.id}
      imgSrc={item.imgSrc}
      title={item.title}
      description={item.description}
      view={item.view}
      source={item.source}
    />
  ));
  return (
    <>
      <div className="work-heading">
        <h1>Projects</h1>
      </div>
      <div className="works">{works}</div>
    </>
  );
};

export default Project;
