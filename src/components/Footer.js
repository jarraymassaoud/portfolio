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
                  <li>
                    <a href="http://jarraymassoud@gmail.com/" title="">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jarraymassaoud" title="">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
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
