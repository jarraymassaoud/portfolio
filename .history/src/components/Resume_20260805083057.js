import React from "react";

export const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="container">
        <h2 className="dark-color">Resume</h2>
        <div className="row">
          {/* Education */}
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Education</h3>

            <div className="resume-item">
              <h4>National Engineering Diploma in Computer Engineering</h4>
              <h5>2018 - 2020</h5>
              <p className="school-name">
                Private Higher School of Engineers and Technological Studies of
                Tunis
              </p>
            </div>

            <div className="resume-item">
              <h4>Professional Master in Industrial Computer Science</h4>
              <h5>2013 - 2015</h5>
              <p className="school-name">
                Higher Institute of Computer Science of Medenine
              </p>
            </div>

            <div className="resume-item">
              <h4>Master Degree in Computer Science</h4>
              <h5>2004 - 2010</h5>
              <p className="school-name">Faculty of Sciences of Gabes</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>

            <div className="resume-item">
              <h4>Front-End Developer</h4>
              <h5>Jan 2023 - Mar 2023</h5>
              <ul>
                <li>Develop and implement an e-commerce website.</li>
                <li>Develop and implement a fast-food website.</li>
                <li>
                  Develop and document efficient and reliable source code.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Computer Engineer</h4>
              <h5>June 2021 - Dec 2022</h5>
              <p className="company-name">Plus Security - Ariana</p>
              <ul>
                <li>
                  Installation and maintenance of IT equipment and security
                  systems.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Odoo Developer</h4>
              <h5>Dec 2020 - May 2021</h5>
              <p className="company-name">Digi Firms - Ariana</p>
              <ul>
                <li>Development of Odoo applications.</li>
              </ul>
            </div>
          </div>

          {/* Formations */}
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Formation</h3>
            <div className="resume-item">
              <h4>Front-End Web Development with React</h4>
              <h5>Feb 2023</h5>
              <p>The Hong Kong University of Science and Technology (Online)</p>
            </div>
            <div className="resume-item">
              <h4>Front-End Web UI Frameworks: Bootstrap 4</h4>
              <h5>Jan 2023</h5>
              <p>The Hong Kong University of Science and Technology (Online)</p>
            </div>
            <div className="resume-item">
              <h4>Front-End HTML5/CSS3/jQuery</h4>
              <h5>Oct 2019</h5>
              <p>Training Center Of Ariana</p>
            </div>
          </div>

          {/* Languages */}
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Languages</h3>
            <div className="resume-item">
              <h4>English</h4>
              <div className="lang-bar">
                <span>Read: </span>
                <progress value="70" max="100"></progress>
              </div>
              <div className="lang-bar">
                <span>Write: </span>
                <progress value="60" max="100"></progress>
              </div>
              <div className="lang-bar">
                <span>Speak: </span>
                <progress value="50" max="100"></progress>
              </div>
            </div>

            <div className="resume-item">
              <h4>French</h4>
              <div className="lang-bar">
                <span>Read: </span>
                <progress value="80" max="100"></progress>
              </div>
              <div className="lang-bar">
                <span>Write: </span>
                <progress value="70" max="100"></progress>
              </div>
              <div className="lang-bar">
                <span>Speak: </span>
                <progress value="60" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
