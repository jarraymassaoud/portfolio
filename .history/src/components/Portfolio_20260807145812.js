import React, { useState } from "react";
import logo2 from "../assets/images/flower.png";

export const Portfolio = () => {
  // Structure des données de ton projet
  const projects = [
    {
      id: 1,
      title: "My Shop MS — Modern E-Commerce Platform",
      image: logo2,
      shortDesc:
        "A sleek, highly responsive E-Commerce web application specialized in floral products and customized gifts. Built with React.js and Styled-Components.",
      features: [
        "Interactive Hero & Banner Sliders",
        "Product Catalog & Detail Views (React Router)",
        "Shopping Cart & Checkout Interface",
        "Fully Responsive Design across all devices",
        "Modern Login & Registration forms",
      ],
      techStack: [
        "React.js",
        "JavaScript (ES6+)",
        "Styled-Components",
        "React Router DOM",
        "Material-UI Icons",
        "HTML5 / CSS3",
      ],
      demoLink: "#", // Lien vers le site en ligne (ex: Vercel / Netlify)
      githubLink: "https://github.com/jarraymassaoud", // Lien vers ton GitHub
    },
  ];

  return (
    <section className="portfolio py-4 bg-light" id="portfolio">
      <div className="container">
        {/* En-tête de la section */}
        <div className="row text-center mb-3">
          <div className="col-12">
            <h2 className="white-color fw-bold">My Projects</h2>
          </div>
        </div>

        {/* Grille des projets */}
        <div className="row justify-content-center">
          {projects.map((project) => (
            <div className="col-lg-8 col-md-10 mb-3" key={project.id}>
              <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
                <div className="row g-0">
                  {/* Image du projet */}
                  <div className="col-md-5 bg-dark d-flex align-items-center justify-content-center p-3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid rounded"
                      style={{ maxHeight: "250px", objectFit: "contain" }}
                    />
                  </div>

                  {/* Contenu de la carte */}
                  <div className="col-md-7">
                    <div className="card-body p-4">
                      <h4 className="card-title fw-bold text-primary mb-2">
                        {project.title}
                      </h4>
                      <p className="card-text text-muted small mb-3">
                        {project.shortDesc}
                      </p>

                      {/* Fonctionnalités Clés */}
                      <h6 className="fw-bold mb-2">Key Features:</h6>
                      <ul className="small text-muted ps-3 mb-3">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>

                      {/* Tech Stack (Badges) */}
                      <div className="mb-3 d-flex flex-wrap gap-1">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="badge bg-secondary font-weight-normal"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Boutons d'action */}
                      <div className="d-flex gap-2 mt-auto">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-dark btn-sm"
                        >
                          GitHub Code
                        </a>
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
