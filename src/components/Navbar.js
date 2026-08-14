import React, { useState } from "react";
import logo from "../assets/images/miteck.ico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  // حالة التحكم في ظهور اللوجو المكبّر في المنتصف
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-dark py-2">
        <div className="container">
          {/* قسم اللوجو والعنوان */}
          <div className="d-flex align-items-center">
            <a className="nav-link d-flex align-items-center p-0" href="#home">
              <div
                style={{ width: "45px", height: "35px", position: "relative" }}
              >
                <img
                  src={logo}
                  alt="miteck logo"
                  style={{
                    height: "35px",
                    width: "auto",
                    cursor: "pointer",
                    transition: "transform 0.2s ease-in-out",
                  }}
                  onClick={() => setShowModal(true)} // فتح الصورة كبيراً عند النقر
                  onMouseEnter={() => setShowModal(true)} // أو عند تمرير الفأرة
                />
              </div>

              <span
                className="text-white fw-bold ms-2"
                style={{ marginLeft: "10px" }}
              >
                My Portfolio
              </span>
            </a>
          </div>

          {/* زر التلفون */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>

          {/* روابط القائمة */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
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
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 🟢 نافذة مكبرة في منتصف الشاشة مع زر إغلاق X */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.85)", // خلفية مظلمة شفافة
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999999, // لضمان الظهور فوق كافة عناصر الموقع
          }}
          onClick={() => setShowModal(false)} // إغلاق عند النقر على الشاشة
        >
          <div
            style={{ position: "relative", padding: "20px" }}
            onClick={(e) => e.stopPropagation()} // منع الإغلاق عند النقر على الصورة نفسها
          >
            {/* زر الإغلاق X */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "-15px",
                right: "-15px",
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
              }}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>

            {/* اللوجو بحجم كبير في المنتصف */}
            <img
              src={logo}
              alt="miteck logo enlarged"
              style={{
                maxWidth: "80vw",
                maxHeight: "70vh",
                width: "300px", // حجم مكبر ممتاز
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0px 10px 20px rgba(255,255,255,0.2))",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
