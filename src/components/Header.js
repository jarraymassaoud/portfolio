import React from "react";
import Typed from "react-typed";
import logo from "../assets/images/logo1.jpg";

export const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <p> Massaoud Jarray</p>
        <img src={logo} alt="logo..." height="50%" width="10%" />

        <Typed
          className="typed-text"
          strings={["Computer Engineer", "Developer FullStack Mern"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
};
export default Header;
