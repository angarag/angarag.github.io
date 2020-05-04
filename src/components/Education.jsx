import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import CodeIcon from "@material-ui/icons/Code";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
const Education = () => {
  return (
    <section
      className="ftco-section ftco-no-pb goto-here marginTop"
      id="education"
    >
      <div className="container ">
        <div className="row">
          <div className="col-md-3">
            <nav id="navi">
              <ul>
                <li>
                  <a href="#page-1">
                    <SchoolIcon />
                    {" Education"}
                  </a>
                </li>
                <li>
                  <a href="#page-2">
                    <WorkIcon />
                    {" Experience"}
                  </a>
                </li>
                <li>
                  <a href="#page-3">
                    <CodeIcon />
                    {" Skills"}
                  </a>
                </li>
                <li>
                  <a href="#page-4">
                    <CardGiftcardIcon />
                    {" Awards"}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-9 ">
            <div id="page-1" class="page one">
              <h2 className="heading">Education</h2>
              <div className="resume-wrap d-flex ftco-animate">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-ideas"></span>
                </div>
                <div className="text pl-3">
                  <span className="date">2018-2020</span>
                  <h2>Master degree in Computer Software</h2>
                  <span className="position">
                    Maharishi International University
                  </span>
                </div>
              </div>
            </div>
            <div className="resume-wrap d-flex ftco-animate">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-ideas"></span>
              </div>
              <div className="text pl-3">
                <span className="date">2006-2011</span>
                <h2>Bachelor degree in Computer Science</h2>
                <span className="position">Istanbul Technical University</span>
                {/* <p>
                    lorem
                  </p> */}
              </div>
            </div>

            <div id="page-2" class="page two">
              <h2 className="heading">Experience</h2>
              <div className="resume-wrap d-flex ftco-animate">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-ideas"></span>
                </div>
                <div className="text pl-3">
                  <span className="date">Jul, 2019 - Present</span>
                  <h2>Software Engineer</h2>
                  <span className="position">Walmart</span>
                  <p>
                    Front End Lead in the Talent Blueprint project which is a
                    calibration tool for store hiring manager to make a
                    data-driven decision on selection events by using
                    Comparison, Reviewing and Ranking features.
                  </p>
                </div>
              </div>
              <div className="resume-wrap d-flex ftco-animate">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-ideas"></span>
                </div>
                <div className="text pl-3">
                  <span className="date">2013-2018</span>
                  <h2>Technical Planning Engineer</h2>
                  <span className="position">Mobicom Corporation</span>
                  <p>
                    In charge of planning in-house and vendor products acc' to
                    short and medium-term business plans.
                  </p>
                </div>
              </div>
              <div className="resume-wrap d-flex ftco-animate">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-ideas"></span>
                </div>
                <div className="text pl-3">
                  <span className="date">2011-2013</span>
                  <h2>Full Stack Developer</h2>
                  <span className="position">Singleton LLC</span>
                  <p>Team Lead in the outsourcing project.</p>
                </div>
              </div>
            </div>
            <div id="page-3" class="page three">
              <h2 className="heading">Skills</h2>
              <div className="row borderBottom">
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate">
                    <h3>Vanilla JavaScript</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow="97"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "97%" }}
                      >
                        <span>97%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate">
                    <h3>React.js, Redux</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-2"
                        role="progressbar"
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "95%" }}
                      >
                        <span>95%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate">
                    <h3>CSS3</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-4"
                        role="progressbar"
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "95%" }}
                      >
                        <span>95%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate">
                    <h3>HTML5</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-5"
                        role="progressbar"
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "95%" }}
                      >
                        <span>95%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate">
                    <h3>Angular v2+</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-3"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate">
                    <h3>Node.js</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-3"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate">
                    <h3>Express.js</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-3"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate">
                    <h3>HAPI.js</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-3"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate">
                    <h3>jQuery</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-3"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate">
                    <h3>Java/Spring boot</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-6"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      >
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ftco-animate">
                    <h3>PHP/Symphony</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-6"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      >
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="page-4" class="page four">
              <h2
                className="heading"
                style={{
                  marginTop: 12,
                }}
              >
                Awards
              </h2>
              <div className="resume-wrap d-flex ftco-animate">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-ideas"></span>
                </div>
                <div className="text pl-3">
                  <span className="date">2013-2014</span>
                  <h2>The Best Project of the Year</h2>
                  <span className="position">Mobicom Corporation</span>
                  <p>
                    The inhouse developed Ring Back Tone project got awarded the
                    best project.
                  </p>
                </div>
              </div>
              <div className="resume-wrap d-flex ftco-animate">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-ideas"></span>
                </div>
                <div className="text pl-3">
                  <span className="date">2002, 2003</span>
                  <h2>Bronze, Silver Medal</h2>
                  <span className="position">Mathematical Olympiad</span>
                  <p>
                    Ranked #3 and #2 in South Mongolia region - Math olympiad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
