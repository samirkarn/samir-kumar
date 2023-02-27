import React from "react";
import "./Footer.css";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4><FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />Muzaffarpur, Bihar</h4>       
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-8377815352
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              samirka00@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>I'm Samir Kumar, a Frontend Developer. I use HTML, CSS, JavaScript, ReactJS, WordPress & etc technologies for Frontend development. I have started my frontend development career from 2019.
            </p>
        <div className="social">
        <NavLink to="https://www.facebook.com/samir.karn.92" target="_blank">
        <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/samir-kumar-720131147/" target="_blank">
        <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
          </NavLink>
          <NavLink to="https://github.com/samirkarn" target="_blank">
        <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
          </NavLink>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
