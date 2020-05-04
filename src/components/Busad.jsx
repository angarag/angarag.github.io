import React from "react";
import Car from "../images/car.jpg";
import BSB from "../images/tech.jpg";
import TB from "../images/hr.jpg";
const Busad = () => {
  return (
    <>
      <section id="projects" className="ftco-section ftco-project">
        <div className="container-fluid px-md-0">
          <div className="row no-gutters justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big big-2">Projects</h1>
              <h2 className="mb-4">Professional Projects</h2>
              <h6>
                Here are some of the projects I have implemented in my
                professional career.
              </h6>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-4">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${Car})` }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a target="_blank" href="https://cardoctor.mn">
                      Car Doctor
                    </a>
                  </h3>
                  <span>Online shopping</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${BSB})` }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a target="_blank" href="https://www.bsb.mn">
                      eBSB
                    </a>
                  </h3>
                  <span>Online shopping for BSB company</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${TB})` }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Talent Blueprint</a>
                  </h3>
                  <span>Calibration tool for store hiring managers</span>
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
