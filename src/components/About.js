import React from "react";
import { Fade } from "react-animation-components";

export const About = () => {
  return (
    <Fade in>
      <section className="about-section section" id="about">
        <div className="container">
          {/* Section Header */}
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="text-white fw-bold">About Me</h2>
              <div
                className="mx-auto"
                style={{
                  width: "60px",
                  height: "3px",
                  backgroundColor: "var(--primary-orange, #ff9900)",
                }}
              ></div>
            </div>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Carré 1: Who I Am */}
            <div className="col-lg-7">
              <div
                className="p-4 rounded shadow-sm h-100 border border-light border-opacity-25 d-flex flex-column justify-content-between"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div>
                  <h3 className="resume-title text-warning mb-4 pb-2 border-bottom border-light border-opacity-25">
                    Who I Am
                  </h3>
                  <p className="text-light leading-relaxed">
                    I am a passionate{" "}
                    <strong className="text-white">
                      Full-Stack Web Developer
                    </strong>{" "}
                    specializing in the{" "}
                    <strong className="text-white">
                      MERN Stack (MongoDB, Express, React, Node.js)
                    </strong>
                    . I focus on creating interactive, scalable, and
                    high-performing web applications with a clean user
                    experience.
                  </p>
                  <p className="text-light leading-relaxed mb-0">
                    My experience includes designing reusable UI components,
                    optimizing performance, and integrating robust RESTful APIs.
                    I am always driven by modern web standards and continuously
                    learning new concepts to solve real-world problems
                    efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* Carré 2: Personal Information */}
            <div className="col-lg-5">
              <div
                className="p-4 rounded shadow-sm h-100 border border-light border-opacity-25 d-flex flex-column justify-content-between"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div>
                  <h3 className="resume-title text-warning mb-4 pb-2 border-bottom border-light border-opacity-25">
                    Personal Information
                  </h3>

                  <div className="row g-3">
                    <div className="col-sm-6">
                      <span className="text-light d-block small">Location</span>
                      <strong className="text-white">Tunis, Tunisia</strong>
                    </div>
                    <div className="col-sm-6">
                      <span className="text-light d-block small">
                        Nationality
                      </span>
                      <strong className="text-white">Tunisian</strong>
                    </div>
                    <div className="col-sm-6">
                      <span className="text-light d-block small">Email</span>
                      <a
                        href="mailto:jarraymassoud@gmail.com"
                        className="text-decoration-none fw-bold text-warning"
                      >
                        jarraymassoud@gmail.com
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <span className="text-light d-block small">Phone</span>
                      <strong className="text-white">+216 97 73 54 81</strong>
                    </div>
                    <div className="col-sm-12 mt-4">
                      <span className="text-light d-block small mb-1">
                        Freelance & Job Status
                      </span>
                      <span className="badge bg-success fs-6">
                        Available for Hire
                      </span>
                    </div>
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

export default About;
