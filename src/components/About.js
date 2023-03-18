import React from "react";

export const About = () => {
  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-text go-to">
              <h3 className="dark-color">About Me</h3>
              <p>
                I am an experienced ReactJS developer with a passion for
                creating interactive and high-performing web solutions. I have
                worked on a variety of projects, ranging from small applications
                to complex enterprise-level projects. I have a strong background
                in designing reusable components, optimizing performance, and
                implementing best development practices. My development approach
                is user-centric, and I am always looking for innovative ways to
                improve user experience and code efficiency. I am also
                passionate about sharing my knowledge with other developers and
                continuously seeking new challenges to improve my skills as a
                developer.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Residence</label>
                  <p>Tunisia</p>
                </div>
                <div className="media">
                  <label>Address</label>
                  <p>Tunis, Tunisia</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>jarraymassoud@gmail.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>+216 97 73 54 81</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
