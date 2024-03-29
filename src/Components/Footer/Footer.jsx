import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="upper">
          <div className="links">
            <h4>Quick Links</h4>
            <Link to="/">Service</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact"> Contact</Link>
          </div>
          <div className="links">
            <h4>Connect With Us</h4>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Linkedin</Link>
          </div>
          <div className="footer-content">
            <h4>About us</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti harum dolorem mus alias. Ullam consequuntur natusdfdfg qui sunt!</p>
          </div>
          <div className="footer-content">
            <h4>Contact</h4>
            <p>R - 77 Bad ke Ali Aurangabad - 431101</p>
          </div>
        </div>
        <div className="lower">
          <div className="branding">
            <p>
              {" "}
              <span className="brand-name">Codeango Meets</span> &copy; All Rights Reserved 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
