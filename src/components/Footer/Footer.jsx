import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer container" id="contact">
      <div className="footer-top">
        <div className="glow-circle">
          <a href="mailto:mzu.nqwiliso@gmail.com">mzu.nqwiliso@gmail.com</a>
        </div>
      </div>

      <div className="footer-bottom">
        <h3 className="footer-header">Get in Touch</h3>
        <ul className="touch-links">
          <li className="link">
            <NavLink
              to="https://linkedin.com/in/muzuvukile-nqwiliso"
              target="_blank"
            >
              LinkedIn
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="https://drive.google.com/file/d/1zqC1aJ6wvogKPtbnZXXE79ZST89x8J7f/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="https://github.com/mzu-nqwiliso" target="_blank">
              GitHub
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
