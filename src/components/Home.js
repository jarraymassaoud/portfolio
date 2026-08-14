import React from "react";
// Assure-toi que les chemins sont corrects
import logomass from "../assets/images/logomas.jpeg";
import myCvPDF from "../assets/massaoud_jarray_cv.pdf";

export const Home = () => {
  return (
    <div
      id="home"
      className="header-wraper d-flex align-items-center min-vh-100 py-5"
    >
      <div className="container">
        <div className="row align-items-center justify-content-between flex-row-reverse">
          {/* Colonne النصوص والأزرار */}
          <div className="col-md-7 text-center text-md-start main-info-text">
            <h1 className="fw-bold text-white mb-2 display-4">
              Jarray Massaoud
            </h1>
            <p className="typed-text fs-3 text-warning mb-4 fw-semibold">
              Full-Stack Web Developer
            </p>

            {/* 🟢 Boutons d'action regroupés dans un seul div */}
            <div className="home-buttons mt-4 d-flex justify-content-center justify-content-md-start gap-3 flex-wrap">
              <a
                href="#contact"
                className="btn btn-primary btn-lg px-4 py-2 shadow-sm"
              >
                Contact Me
              </a>
              <a
                href={myCvPDF}
                download="massaoud_jarray_cv.pdf"
                className="btn btn-outline-light btn-lg px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2"
              >
                Download CV{" "}
                <i className="fa fa-download" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Colonne الصورة الشخصية - مظهر واضح ومشرق */}
          <div className="col-md-5 text-center mt-4 mt-md-0 d-flex justify-content-center align-items-center">
            <div className="main-cv">
              <img
                src={logomass}
                alt="Jarray Massaoud"
                className="img-fluid rounded-4 shadow-lg"
                style={{
                  maxWidth: "360px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",

                  /* 🟢 1. تعديلات الفلتر لإبراز الوجه وتفتيح الصورة */
                  filter: "brightness(110%) contrast(105%)",

                  /* 🟢 2. إطار احترافي ناعم يمنح الصورة مظهراً متناسقاً مع الخلفية الغامقة */
                  border: "2px solid rgba(255, 255, 255, 0.15)",

                  /* 🟢 3. ظلال خفيفة لإعطاء عمق وتأكيد الوضوح */
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
