import React from "react";
// Assure-toi que le chemin est correct
import AbleImage from "../assets/images/Able.webp";

export const Home = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        {/* Ton texte animé */}
        <p>I am Jarray Massaoud</p>
        <p className="typed-text">I am a Developer</p>

        {/* Ton image de CV/Profile (optionnel si tu la veux ici) */}
        <div className="main-cv">
          <img
            src={assets / images / mass.jpg}
            alt="CV Profile"
            style={{ width: "100px", borderRadius: "50%" }}
          />
        </div>

        <a href="#contact" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};
