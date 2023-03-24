import React from "react";
import Typed from "react-typed";

export const Home = () => {
  return (
    <div>
      <div className="header-wraper">
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
  );
};
export default Home;
