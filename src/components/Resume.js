import React from "react";
import { Fade } from "react-animation-components";

export const Resume = () => {
  return (
    <Fade in>
      <section className="resume section" id="resume">
        <div className="container">
          {/* Section Header */}
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="text-white fw-bold">Resume</h2>
            </div>
          </div>

          <div className="row g-4">
            {/* Carré 1: Professional Experience */}
            <div className="col-lg-6">
              <div
                className="p-4 rounded shadow-sm h-100 border border-light border-opacity-25"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <h3 className="resume-title text-warning mb-4 pb-2 border-bottom border-light border-opacity-25">
                  Professional Experience
                </h3>

                <div className="resume-item">
                  <h4 className="text-white fw-bold">
                    Front-End Developer (Freelance)
                  </h4>
                  <h5 className="text-dark">July 2023 - Present</h5>
                  <p className="text-light">
                    <em>Remote / Tunisia</em>
                  </p>
                  <ul className="text-light small">
                    <li>
                      Designed and developed responsive web applications,
                      including e-commerce platforms and fast-food ordering
                      websites.
                    </li>
                    <li>
                      Built reusable UI components and optimized web performance
                      using modern React.js techniques.
                    </li>
                    <li>
                      Wrote clean, efficient, and well-documented source code
                      adhering to industry best practices.
                    </li>
                  </ul>
                </div>

                <div className="resume-item mb-0">
                  <h4 className="text-white fw-bold">
                    Computer & Security Systems Engineer
                  </h4>
                  <h5 className="text-dark">June 2021 - June 2023</h5>
                  <p className="text-light">
                    <em>Plus Security - Ariana, Tunisia</em>
                  </p>
                  <ul className="text-light small mb-0">
                    <li>
                      Managed the installation, configuration, and maintenance
                      of IT equipment and security systems.
                    </li>
                    <li>
                      Configured network infrastructures to ensure secure
                      connectivity across systems.
                    </li>
                    <li>
                      Diagnosed and resolved complex hardware and software
                      issues with minimal downtime.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Carré 2: Education */}
            <div className="col-lg-6">
              <div
                className="p-4 rounded shadow-sm h-100 border border-light border-opacity-25"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <h3 className="resume-title text-warning mb-4 pb-2 border-bottom border-light border-opacity-25">
                  Education
                </h3>

                <div className="resume-item">
                  <h4 className="text-white fw-bold">
                    National Engineering Diploma in Computer Engineering
                  </h4>
                  <h5 className="text-dark">2018 - 2020</h5>
                  <p className="text-light mb-0">
                    Private Higher School of Engineers and Technological Studies
                    of Tunis
                  </p>
                </div>

                <div className="resume-item">
                  <h4 className="text-white fw-bold">
                    Professional Master in Industrial Computer Science
                  </h4>
                  <h5 className="text-dark">2013 - 2015</h5>
                  <p className="text-light mb-0">
                    Higher Institute of Computer Science of Medenine
                  </p>
                </div>

                <div className="resume-item mb-0">
                  <h4 className="text-white fw-bold">
                    Master Degree in Computer Science
                  </h4>
                  <h5 className="text-dark">2004 - 2010</h5>
                  <p className="text-light mb-0">
                    Faculty of Sciences of Gabes
                  </p>
                </div>
              </div>
            </div>

            {/* Carré 3: Formations */}
            <div className="col-lg-6">
              <div
                className="p-4 rounded shadow-sm h-100 border border-light border-opacity-25"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <h3 className="resume-title text-warning mb-4 pb-2 border-bottom border-light border-opacity-25">
                  Formations & Certifications
                </h3>

                <div className="resume-item">
                  <h4 className="text-white fw-bold">
                    Front-End Web Development with React
                  </h4>
                  <h5 className="text-dark">Feb 2023</h5>
                  <p className="text-light mb-0">
                    The Hong Kong University of Science and Technology (Online)
                  </p>
                </div>

                <div className="resume-item">
                  <h4 className="text-white fw-bold">
                    Front-End Web UI Frameworks: Bootstrap 4
                  </h4>
                  <h5 className="text-dark">Jan 2023</h5>
                  <p className="text-light mb-0">
                    The Hong Kong University of Science and Technology (Online)
                  </p>
                </div>

                <div className="resume-item mb-0">
                  <h4 className="text-white fw-bold">
                    Front-End HTML5/CSS3/jQuery
                  </h4>
                  <h5 className="text-dark">Oct 2019</h5>
                  <p className="text-light mb-0">Training Center Of Ariana</p>
                </div>
              </div>
            </div>

            {/* Carré 4: Languages */}
            <div className="col-lg-6">
              <div
                className="p-4 rounded shadow-sm h-100 border border-light border-opacity-25"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <h3 className="resume-title text-warning mb-4 pb-2 border-bottom border-light border-opacity-25">
                  Languages
                </h3>

                {/* English */}
                <div className="resume-item">
                  <h4 className="text-white fw-bold">English</h4>
                  <div className="d-flex align-items-center gap-2 mb-2 text-light">
                    <span style={{ width: "60px" }}>Read:</span>
                    <progress value="70" max="100" className="w-100"></progress>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2 text-light">
                    <span style={{ width: "60px" }}>Write:</span>
                    <progress value="60" max="100" className="w-100"></progress>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-light">
                    <span style={{ width: "60px" }}>Speak:</span>
                    <progress value="50" max="100" className="w-100"></progress>
                  </div>
                </div>

                {/* French */}
                <div className="resume-item mb-0">
                  <h4 className="text-white fw-bold">French</h4>
                  <div className="d-flex align-items-center gap-2 mb-2 text-light">
                    <span style={{ width: "60px" }}>Read:</span>
                    <progress value="80" max="100" className="w-100"></progress>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2 text-light">
                    <span style={{ width: "60px" }}>Write:</span>
                    <progress value="70" max="100" className="w-100"></progress>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-light">
                    <span style={{ width: "60px" }}>Speak:</span>
                    <progress value="60" max="100" className="w-100"></progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Resume;
