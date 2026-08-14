import React, { useState } from "react";
import logo2 from "../assets/images/flower.png";
import logoAtas from "../assets/images/atas.jpeg";

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      demoLink: "https://jarraymassaoud.github.io/floral/",
      githubLink: "https://github.com/jarraymassaoud/floral",
    },
    {
      id: 2,
      title: "ATAS Medenine — Non-Profit Web Platform",
      image: logoAtas,
      shortDesc:
        "Designed and developed a responsive, accessible web application for the Association of Mutual Aid & Solidarity in Medenine to showcase its educational and healthcare services.",
      features: [
        "Arabic Right-to-Left (RTL) Layout & Architecture",
        "Interactive News & Events Slider Carousel",
        "Services & Programs Showcase (Healthcare, Education, Vocational)",
        "Official PDF Document Download Center",
        "Fully Responsive Across Desktop, Tablet & Mobile",
      ],
      techStack: [
        "React.js",
        "Reactstrap / Bootstrap",
        "JavaScript (ES6+)",
        "React Router DOM",
        "HTML5 / CSS3",
      ],
      demoLink: "https://jarraymassaoud.github.io/association/",
      githubLink: "https://github.com/jarraymassaoud/association",
    },
  ];

  // تقديم وتأخير خطوة بخطوة بدون دوران
  const nextProject = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="portfolio py-6 bg-light" id="portfolio">
      <div className="container">
        {/* Header */}
        <div className="row text-center mb-7">
          <div className="col-12">
            <h2 className="text-white fw-bold">My Projects</h2>
            <p className="text-muted mb-6">
              Project {currentIndex + 1} of {projects.length}
            </p>
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
          {/* زر اليسار (Précédent): يتسكر كي تبدا في Projet 1 (index 0) */}
          <div className="col-auto mb-3">
            <button
              onClick={prevProject}
              disabled={currentIndex === 0}
              className={`btn ${
                currentIndex === 0
                  ? "btn-secondary opacity-50"
                  : "btn-outline-primary"
              } rounded-circle p-3 shadow-sm`}
              title="Previous Project"
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              }}
            >
              <i className="fa fa-chevron-left fa-lg"></i>
            </button>
          </div>

          {/* Card متاع المشروع */}
          <div className="col-lg-8 col-md-10 mb-3">
            <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
              <div className="row g-0">
                {/* صورة المشروع */}
                <div className="col-md-5 bg-dark d-flex align-items-center justify-content-center p-3">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="img-fluid rounded"
                    style={{ maxHeight: "250px", objectFit: "contain" }}
                  />
                </div>

                {/* تفاصيل المشروع */}
                <div className="col-md-7">
                  <div className="card-body p-4 d-flex flex-column h-100">
                    <h4 className="card-title fw-bold text-primary mb-2">
                      {currentProject.title}
                    </h4>
                    <p className="card-text text-muted small mb-3">
                      {currentProject.shortDesc}
                    </p>

                    <h6 className="fw-bold mb-2">Key Features:</h6>
                    <ul className="small text-muted ps-3 mb-3">
                      {currentProject.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    <div className="mb-3 d-flex flex-wrap gap-1">
                      {currentProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="badge bg-secondary font-weight-normal me-1 mb-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-2 mt-auto">
                      <a
                        href={currentProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-sm me-2"
                      >
                        GitHub Code
                      </a>
                      <a
                        href={currentProject.demoLink}
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

          {/* زر اليمين (Suivant): يتسكر كي توصل للـ Projet 2 (الـ index الأخير) */}
          <div className="col-auto mb-3">
            <button
              onClick={nextProject}
              disabled={currentIndex === projects.length - 1}
              className={`btn ${
                currentIndex === projects.length - 1
                  ? "btn-secondary opacity-50"
                  : "btn-outline-primary"
              } rounded-circle p-3 shadow-sm`}
              title="Next Project"
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor:
                  currentIndex === projects.length - 1
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              <i className="fa fa-chevron-right fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
