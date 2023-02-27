import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TechCart from "./TechCart";
import { responsive, techData } from "./TechData";
import "./Technology.css"

const Technology = () => {
  const Technologies = techData.map((item) => (
    <TechCart
      key ={item.id}
      imgSrc={item.imgSrc}
      techName={item.techName}
      tagOne={item.tagOne}
      tagTwo={item.tagTwo}
      tagThree={item.tagThree}
    />
  ));
  return (
    <div>
      <div className="tech-heading">
        <h1>Technologies Which I Use</h1>
      </div>
      <Carousel
        className="carousel"
        slidesToSlide={3}
        showDots={true}
        responsive={responsive}
      >
        {Technologies}
      </Carousel>
      ;
    </div>
  );
};

export default Technology;
