import React from "react";

// Imports mta3 il-images (thabbet fil-paths fil-dossier assets mta3ek)
import logoreact from "../assets/images/react.png";
import logoCSS3 from "../assets/images/CSS3.png";
import logoHTML5 from "../assets/images/HTML5.png";
import logojavascript from "../assets/images/javascript.png";
import logomongoDB from "../assets/images/mongoDB.jpg";
import logonodejs from "../assets/images/nodejs.png";
import logobootstrap4 from "../assets/images/bootstrap4.png";
import logojquery from "../assets/images/jquery.png";

export const Skills = () => {
  // Structure mna9la b-categories bch tkoun ashel fil-qraya
  const skillCategories = [
    {
      title: "Front-End",
      skills: [
        { name: "React", img: logoreact },
        { name: "JavaScript (ES6+)", img: logojavascript },
        { name: "HTML5", img: logoHTML5 },
        { name: "CSS3", img: logoCSS3 },
        { name: "Bootstrap", img: logobootstrap4 },
        { name: "jQuery", img: logojquery },
        // Modern Front-end skills (tnajem tzidilhom taswira walla ikons)
        { name: "TypeScript", img: null },
        { name: "Tailwind CSS", img: null },
      ],
    },
    {
      title: "Back-End & Database",
      skills: [
        { name: "Node.js", img: logonodejs },
        { name: "Express.js", img: null },
        { name: "MongoDB", img: logomongoDB },
        { name: "REST APIs", img: null },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git & GitHub", img: null },
        { name: "Postman", img: null },
        { name: "npm / yarn", img: null },
        { name: "VS Code", img: null },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="dark-color">Technical Skills</h2>
            <p className="text-muted">Technologies & Tools I work with</p>
          </div>
        </div>

        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-4">
            <h4 className="text-primary border-bottom pb-2 mb-3">
              {category.title}
            </h4>
            <div className="row">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 text-center"
                >
                  <div className="logoskills p-3 border rounded shadow-sm bg-white h-100 d-flex flex-column align-items-center justify-content-center">
                    {skill.img ? (
                      <img
                        src={skill.img}
                        alt={`Logo ${skill.name}`}
                        className="img-fluid mb-2"
                        style={{ maxHeight: "50px", objectFit: "contain" }}
                      />
                    ) : (
                      // Icon par défaut ken ma 3andeksh image l-technologie el-jdida
                      <div className="badge bg-secondary mb-2 p-2">Code</div>
                    )}
                    <span
                      className="fw-bold text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
