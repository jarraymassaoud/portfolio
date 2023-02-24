import React from "react";

export const Resume = () => {
  return (
    <div>
      <div className="resume" id="resume">
        <div className="container">
          <h2 className="dark-color">Resume</h2>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>National engineering diploma in computer engineering</h4>
                <h5>2018 - 2020</h5>
                <h3>
                  Private higher School of Engineers and Technological Studies
                  of Tunis
                </h3>
              </div>
              <div className="resume-item">
                <h4>Professional Master in Industrial Computer Science</h4>
                <h5>2013 - 2015</h5>
                <h3>Higher Institute of Computer Science of Medenine</h3>
              </div>
              <div className="resume-item">
                <h4>Master Degree in Computer Science</h4>
                <h5>2004 - 2010</h5>
                <h3>Faculty of Sciences of Gabes</h3>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Computer Engineer</h4>
                <h5>June 2021 - december 2022</h5>
                <h3> Plus Security -Ariana </h3>
                <ul>
                  <li>
                    <h3>
                      Installation, maintenance of IT equipment and security and
                      fire systems
                    </h3>
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4> Odoo Developer </h4>
                <h5>December 2020 - Mai 2021</h5>
                <h3> Digi Firms - Ariana </h3>
                <ul>
                  <li>
                    <h3>development of odoo applications</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
