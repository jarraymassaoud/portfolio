import React from "react";
import Typed from "react-typed";
import logomass from "../assets/images/mass.jpg";
export const Home = () => {
  return (
    <div>
      <div className="header-wraper">
        <div className="row ">
          <div className="col-6">
            {" "}
            <div className="main-info">
              <p> Massaoud Jarray</p>

              <Typed
                className="typed-text"
                strings={[" Front-End Developer -Reactjs-"]}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
              <div className="main-cv">
                <a href="/Massaoudj_cv.pdf" download>
                  Download CV
                  <i class="fa fa-download" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-6"
          style={{ marginTop: "80px", right: "60px", left: "10px" }}
        >
          <img src={logomass} alt="logomass" />
        </div>
      </div>
    </div>
  );
};
export default Home;
