import React from "react";

export const About = () => {
  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="about-text go-to">
          <h3 className="dark-color">About Me</h3>
          <p>
            {" "}
            A <mark>computer engineer</mark>
          </p>
          <div className="row about-list">
            <div className="col-md-3">
              <div className="media">
                <label>Residence</label>
                <p>Tunisia</p>
              </div>
              <div className="media">
                <label>Address</label>
                <p>Tunis, Tunisia</p>
              </div>
            </div>
            <div className="col-md-3">
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
    </section>
  );
};
export default About;
