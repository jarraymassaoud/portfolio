import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="nb-footer">
      {" "}
      {/* Tan7iyet fixed-bottom bch ma tghttish 3la contact */}
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="about">
              <div className="social-media">
                <p>Copyright © {year}. jarraymassaoud. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
