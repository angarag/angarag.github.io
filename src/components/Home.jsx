import React from "react";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="hero-wrap js-fullheight"
        style={{ height: 503 }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight justify-content-center align-items-center"
            style={{ height: 503 }}
          >
            <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center fadeInUp ftco-animated">
              <div className="text text-center">
                <span className="subheading">Hey! I am</span>
                <h1>Ronaldo Fredrickson</h1>
                <h2>
                  I'm a
                  <span
                    className="txt-rotate"
                    data-period="2000"
                    data-rotate='[ "Web Designer.", "Developer.", "Photographer.", "Marketer.", "Blogger" ]'
                  >
                    <span className="wrap">Developer.</span>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mouse">
          <a href="/h" className="mouse-icon">
            <div className="mouse-wheel">
              <span className="ion-ios-arrow-round-down"></span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};
export default Home;
