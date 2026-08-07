import React from "react";
// Assure-toi que le chemin est correct
import logomass from "../assets/images/mass.jpg";

export const Home = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        {/* Ton texte animé */}
        <h1 className="fw-bold text-white mb-2">I am Jarray Massaoud</h1>
        <p className="typed-text fs-4 text-warning mb-4">
          Full-Stack Web Developer
        </p>
        {/* Ton image de CV/Profile (optionnel si tu la veux ici) */}
        <div className="main-cv">
          <img
            src={logomass}
            alt="CV Profile"
            style={{ width: "100px", borderRadius: "50%" }}
          />
        </div>

        <div className="home-buttons mt-4">
          <a href="#contact" className="btn btn-primary me-3">
            Contact Me
          </a>

          {/* Bouton Télécharger CV */}
          <a
            href="/path-to-your-cv.pdf"
            download="CV_Jarray_Massaoud.pdf"
            className="btn btn-primary me-3"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};
