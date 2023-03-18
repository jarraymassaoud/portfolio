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
                <h4>Developer Front-End</h4>
                <h5>Jan 20223 - Mar 2023</h5>
                <h3> </h3>
                <ul>
                  <li>
                    <h3>Develop and implement an e-commerce website.</h3>
                  </li>
                  <li>
                    <h3>Develop and implement an fast-food website.</h3>
                  </li>
                  <li>
                    <h3>
                      Develop and document efficient and reliable source code
                      that meets functional requirements
                    </h3>
                  </li>
                </ul>
              </div>
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
                <h5>December 2020 - May 2021</h5>
                <h3> Digi Firms - Ariana </h3>
                <ul>
                  <li>
                    <h3>development of odoo applications</h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Formation</h3>
              <div className="resume-item">
                <h4>
                  The Hong Kong University of Science and Technology -online-
                </h4>
                <h5>Fev 2023</h5>
                <h3>Front-End Web Development with React</h3>
              </div>
              <div className="resume-item">
                <h4>
                  The Hong Kong University of Science and Technology -online-
                </h4>
                <h5>Jan 2023</h5>
                <h3>Front-End Web UI Frameworks and Tools: Bootstrap 4</h3>
              </div>
              <div className="resume-item">
                <h4>Training Center Of Ariana</h4>
                <h5>Oct 2019</h5>
                <h3>Front-end Html5/CSS3/jQuery</h3>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Language</h3>
              <div className="resume-item">
                <h4>English</h4>
                <ul>
                  <li>
                    <h4>
                      {" "}
                      Read &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <progress value="70" max="100"></progress>{" "}
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Write &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <progress value="60" max="100"></progress>{" "}
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Speak&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <progress value="50" max="100"></progress>{" "}
                    </h4>
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>French</h4>
                <ul>
                  <li>
                    <h4>
                      Read &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <progress value="80" max="100"></progress>{" "}
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Write &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <progress value="70" max="100"></progress>{" "}
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Speak&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <progress value="60" max="100"></progress>{" "}
                    </h4>
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Arab</h4>
                <ul>
                  <li>
                    <h4>
                      Read &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <progress value="100" max="100"></progress>{" "}
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Write &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <progress value="100" max="100"></progress>{" "}
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Speak&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <progress value="100" max="100"></progress>{" "}
                    </h4>
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
