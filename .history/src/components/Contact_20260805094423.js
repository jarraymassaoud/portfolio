import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col-12">
            <h2 className="dark-color">Contact Me</h2>
            <p className="text-muted">
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Info Details & Social Links */}
          <div className="col-lg-5 mb-4">
            <div className="contact-info p-4 bg-white rounded shadow-sm">
              <h4>Get in Touch</h4>
              <p className="mb-4">
                I am available for freelance work and full-time developer
                positions.
              </p>

              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-primary me-3 fs-4"
                />
                <div>
                  <strong>Email:</strong>
                  <p className="mb-0">
                    <a
                      href="mailto:jarraymassoud@gmail.com"
                      className="text-decoration-none"
                    >
                      jarraymassoud@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-primary me-3 fs-4"
                />
                <div>
                  <strong>Phone:</strong>
                  <p className="mb-0">+216 97 73 54 81</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-primary me-3 fs-4"
                />
                <div>
                  <strong>Location:</strong>
                  <p className="mb-0">Tunis, Tunisia</p>
                </div>
              </div>

              <hr />

              {/* Social Media Links */}
              <h5 className="mt-3">Follow Me</h5>
              <div className="d-flex gap-3 mt-2">
                <a
                  href="https://www.linkedin.com/in/massaoud-jarray-055b03154/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm rounded-circle p-2"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a
                  href="https://github.com/jarraymassaoud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm rounded-circle p-2"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire mta3 Contact */}
          <div className="col-lg-6 mb-4">
            <form
              action="https://formspree.io/f/jarraymassoud@gmail.com" // Tnajem t-remplaciha b-Formspree ID mta3ek
              method="POST"
              className="p-4 bg-white rounded shadow-sm"
            >
              <div className="mb-3">
                <label className="form-label font-weight-bold">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label font-weight-bold">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label font-weight-bold">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
