import React from "react";
import { Fade } from "react-animation-components";

export const About = () => {
  return (
    <Fade in>
      <section className="section about-section py-5 bg-light" id="about">
        <div className="container">
          {/* Section Header */}
          <div className="row text-center mb-4">
            <div className="col-12">
              <h2 className="dark-color fw-bold">About Me</h2>
              <div
                className="mx-auto"
                style={{
                  width: "60px",
                  height: "3px",
                  backgroundColor: "var(--accent-orange, #ff9900)",
                }}
              ></div>
            </div>
          </div>

          <div className="row align-items-center">
            {/* Description Text */}
            <div className="col-lg-7 mb-4 mb-lg-0">
              <div className="about-text p-4 bg-white rounded shadow-sm">
                <h4 className="text-primary mb-3">Who I Am</h4>
                <p className="text-muted leading-relaxed">
                  I am a passionate **Full-Stack Web Developer** specializing in
                  the **MERN Stack (MongoDB, Express, React, Node.js)**. I focus
                  on creating interactive, scalable, and high-performing web
                  applications with a clean user experience.
                </p>
                <p className="text-muted leading-relaxed mb-0">
                  My experience includes designing reusable UI components,
                  optimizing performance, and integrating robust RESTful APIs. I
                  am always driven by modern web standards and continuously
                  learning new concepts to solve real-world problems
                  efficiently.
                </p>
              </div>
            </div>

            {/* Personal Details & Stats */}
            <div className="col-lg-5">
              <div className="p-4 bg-white rounded shadow-sm border-start border-4 border-warning">
                <h5 className="fw-bold mb-3 text-dark">Personal Information</h5>

                <div className="row g-3">
                  <div className="col-sm-6">
                    <span className="text-muted d-block small">Location</span>
                    <strong className="text-dark">Tunis, Tunisia</strong>
                  </div>
                  <div className="col-sm-6">
                    <span className="text-muted d-block small">
                      Nationality
                    </span>
                    <strong className="text-dark">Tunisian</strong>
                  </div>
                  <div className="col-sm-6">
                    <span className="text-muted d-block small">Email</span>
                    <a
                      href="mailto:jarraymassoud@gmail.com"
                      className="text-decoration-none fw-bold text-primary"
                    >
                      jarraymassoud@gmail.com
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <span className="text-muted d-block small">Phone</span>
                    <strong className="text-dark">+216 97 73 54 81</strong>
                  </div>
                  <div className="col-sm-12">
                    <span className="text-muted d-block small">
                      Freelance & Job Status
                    </span>
                    <span className="badge bg-success mt-1">
                      Available for Hire
                    </span>
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
