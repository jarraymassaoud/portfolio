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

          <div className="col-md-4">
            <div
              className={`logoport ${selected === 0 ? "selected" : ""}`}
              onClick={() => handleSelect(0)}
            >
              <img src={logo2} alt="Logo 1" />
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`logoport ${selected === 1 ? "selected" : ""}`}
              onClick={() => handleSelect(1)}
            ></div>
          </div>

          <div className="col-md-4">
            <div
              className={`logoport ${selected === 2 ? "selected" : ""}`}
              onClick={() => handleSelect(2)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
