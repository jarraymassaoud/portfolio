import React from "react";
import logoreact from "../assets/images/react.png";
import logobootstrap4 from "../assets/images/bootstrap4.png";
import logoCSS3 from "../assets/images/CSS3.png";
import logoHTML5 from "../assets/images/HTML5.png";
import logojavascript from "../assets/images/javascript.png";
import logojquery from "../assets/images/jquery.png";
import logomongoDB from "../assets/images/mongoDB.jpg";
import logonodejs from "../assets/images/nodejs.png";
export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="about-text go-to">
              <h3 className="dark-color">Skills</h3>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="logoskills">
              <img src={logoreact} alt="Logo react" />
            </div>
            <div className="logoskills">
              <img src={logonodejs} alt="Logo nodejs" />
            </div>
            <div className="logoskills">
              <img src={logomongoDB} alt="Logo mongodb" />
            </div>
          </div>

          <div className="col-sm-3">
            <div className="logoskills">
              <img src={logobootstrap4} alt="Logo bootstrap4" />
            </div>

            <div className="logoskills">
              <img src={logojavascript} alt="Logo javascript" />
            </div>
            <div className="logoskills">
              <img src={logoHTML5} alt="Logo html5" />
            </div>
          </div>

          <div className="col-sm-3">
            <div className="logoskills">
              <img src={logoCSS3} alt="Logo css3" />
            </div>
            <div className="logoskills">
              <img src={logojquery} alt="Logo jquery" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
