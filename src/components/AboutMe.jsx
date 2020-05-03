import React from "react";
import Background from "../images/about.jpg";
import Mouse from "./Mouse";
const AboutMe = () => {
  return (
    <>
      <section
        id="about"
        className="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay"></div>
                <div
                  className="img d-flex align-self-stretch align-items-center"
                  style={{ backgroundImage: Background }}
                ></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 pl-md-5 py-5 aboutMars">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                  <h1 className="big">About</h1>
                  <h2 className="mb-4">About Me</h2>
                  <p>
                    Versatile Software Engineer with 9+ years of experience in
                    IT.
                  </p>
                  <ul className="about-info mt-4 px-md-0 px-2">
                    <li className="d-flex">
                      <span>Email:</span>{" "}
                      <span>angarag.batjargal@gmail.com</span>
                    </li>
                    <li className="d-flex">
                      <span>Phone: </span> <span>+1-707-508-9432</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated">
                <div className="text">
                  <p>
                    <a href="/dd" className="btn btn-primary py-3 px-3">
                      Download resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Mouse path="education" />
      </section>
    </>
  );
};

export default AboutMe;
