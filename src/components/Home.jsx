import React from "react";

import Mouse from "./Mouse";
const Home = () => {
  return (
    <>
      <section id="home" className="hero-wrap js-fullheight">
        <div className="overlay"></div>
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight justify-content-center align-items-center"
            style={{ height: 503 }}
          >
            <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center fadeInUp ftco-animated">
              <div className="text text-center">
                <span className="subheading">Hey! I am</span>
                <h1>Angarag Batjargal</h1>
                <h2>
                  {"I'm a "}
                  <span
                    className="txt-rotate"
                    data-period="2000"
                    data-rotate='[ "Web Designer.", "Developer.", "Photographer.", "Marketer.", "Blogger" ]'
                  >
                    <span className="wrap">Software Engineer.</span>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Mouse />
      </section>
    </>
  );
};
export default Home;
