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
  const skillsList = [
    { name: "React", img: logoreact },
    { name: "NodeJS", img: logonodejs },
    { name: "MongoDB", img: logomongoDB },
    { name: "Bootstrap 4", img: logobootstrap4 },
    { name: "JavaScript", img: logojavascript },
    { name: "HTML5", img: logoHTML5 },
    { name: "CSS3", img: logoCSS3 },
    { name: "jQuery", img: logojquery },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 mb-4">
            <h2 className="dark-color">Skills</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="col-6 col-md-3 col-lg-2 mb-4 text-center"
            >
              <div className="logoskills">
                <img
                  src={skill.img}
                  alt={`Logo ${skill.name}`}
                  className="img-fluid"
                />
                <p className="mt-2">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
