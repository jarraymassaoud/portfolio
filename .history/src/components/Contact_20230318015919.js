import React from "react";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact-title"> Contact</h2>
        <div className="row">
          <div className="about">
            <div className="social-media">
              <li>
                <a href="mailto:jarraymassoud@gmail.com">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/massaoud-jarray-055b03154/"
                  title=""
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/jarraymassaoud" title="">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
