import React from "react";
import logomass from "../assets/images/logo.ico"; // walla taswirtik il-personnelle

export const Home = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info d-flex flex-column align-items-center justify-content-center text-center">
        {/* Profile Image */}
        <div className="main-cv mb-3">
          <img
            src={logomass}
            alt="Jarray Massaoud"
            className="rounded-circle shadow"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              border: "3px solid #ff9900",
            }}
          />
        </div>

        {/* Dynamic / Intro Text */}
        <h1 className="fw-bold text-white mb-2">I am Jarray Massaoud</h1>
        <p className="typed-text fs-4 text-warning mb-4">
          Full-Stack Web Developer
        </p>

        {/* Action Buttons */}
        <div className="d-flex gap-3 justify-content-center">
          <a href="#contact" className="btn btn-primary px-4 py-2">
            Contact Me
          </a>

          {/* Bouton Télécharger CV */}
          <a
            href="/CV_Jarray_Massaoud.pdf"
            download="CV_Jarray_Massaoud.pdf"
            className="btn btn-outline-warning px-4 py-2"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
