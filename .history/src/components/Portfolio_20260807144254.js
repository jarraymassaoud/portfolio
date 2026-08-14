import React, { useState } from "react";
import logo2 from "../assets/images/flower.png";
export const Portfolio = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="dark-color">My Projects</h2>
          </div>
          Project Title: My Shop MS — Modern E-Commerce Platform Short
          Description: A sleek, highly responsive E-Commerce web application
          specialized in floral products and customized gifts. Built with
          React.js and Styled-Components, featuring an intuitive user interface,
          fluid client-side routing, and clean modular architecture. Key
          Features: Interactive Hero & Banner Sliders: Dynamic home page
          animations and promotional sliders. Product Catalog & Detail Views:
          Seamless navigation with dynamic routing (react-router-dom) connecting
          the catalog to individual Product Detail Pages (PDP). Shopping Cart &
          Checkout Interface: Integrated cart summary layout with itemized
          pricing, shipping, and discount calculations. Fully Responsive Design:
          Custom-tailored layouts optimized across mobile, tablet, and desktop
          devices. Authentication Pages: Styled, modern interface for user Login
          and Registration forms. Tech Stack: React.js • JavaScript (ES6+) •
          Styled-Components • React Router DOM • Material-UI Icons • HTML5 /
          CSS3
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
