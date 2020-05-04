import React from "react";
import marsLogo from "../images/mars.png";
import Contact from "./Contact";
import HomeIcon from "@material-ui/icons/Home";
const Nav = ({ children }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
        id="ftco-navbar"
      >
        <div className="container">
          <a href="/">
            <img src={marsLogo} alt="marsLogo" style={{ height: 64 }} />
          </a>
          <div className="mobile">
            <Contact />
          </div>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  <span>
                    <HomeIcon />
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  <span>About</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#education" className="nav-link">
                  <span>Experience</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  <span>Projects</span>
                </a>
              </li>
              <Contact />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
