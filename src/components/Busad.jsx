import React from "react";
import WorkImg1 from "../images/about.jpg";
import WorkImg2 from "../images/about.jpg";
import WorkImg3 from "../images/about.jpg";
const Busad = () => {
  return (
    <>
      <section id="projects" className="ftco-section ftco-project">
        <div className="container-fluid px-md-0">
          <div className="row no-gutters justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big big-2">Projects</h1>
              <h2 className="mb-4">Our Projects</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-4">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${WorkImg1})` }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${WorkImg1})` }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${WorkImg2})` }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${WorkImg3})` }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${WorkImg1})` }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${WorkImg2})` }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Busad;
