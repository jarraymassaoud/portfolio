import React from "react";
export const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="nb-footer fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="about">
            <div className="social-media">
              <div className="list-inline">
                <div className="col-sm-12">
                  <p>Copyright © {year}. jarraymassaoud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
