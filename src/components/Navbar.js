import React from "react";
import logo from "../images/logo.ico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar navbar-expand-md navbar-light fixed-top bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            height="30"
            width="41"
            className="logo"
            alt="My Portfolio"
          />{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <ul className="navbar-nav ">
          <li className="nav-item  ative">
            <a className="nav-link " aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resume">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
