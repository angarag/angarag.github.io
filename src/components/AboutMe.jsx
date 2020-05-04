import React from "react";
import Background from "../images/about.jpg";
import Mouse from "./Mouse";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GetAppIcon from "@material-ui/icons/GetApp";
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
                  <p>
                    Specialized in Web Development technologies such as
                    JavaScript, React.js/Redux, Angular, Node.js and Express.js.
                  </p>
                  <ul className="about-info mt-4 px-md-0 px-2 iconColor">
                    <li>
                      <MailOutlineIcon />
                      <span>
                        <a href="mailto:angarag.batjargal@gmail.com">
                          angarag.batjargal@gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <PhoneAndroidIcon />
                      <span>
                        <a href="tel:707-508-9432">+1-707-508-9432</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated">
                <div className="text">
                  <p>
                    <a
                      target="_blank"
                      href="https://www.dropbox.com/s/3jzzbz4nx4neong/angarag-resume-20200420.pdf?dl=0"
                      className="btn btn-primary py-3 px-3"
                      style={{ fontSize: 24 }}
                    >
                      <GetAppIcon /> resume
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
