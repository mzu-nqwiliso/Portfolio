import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../common/Button/Button";
import "./Header.css";
import { HiMenuAlt2 } from "react-icons/hi";

export default function Header({ links, buttonText }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Scroll listener to update active link
  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.querySelector(link.path);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100 && top >= -section.offsetHeight + 100) {
            setActiveLink(link.path);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <div className="header container">
      <HiMenuAlt2
        size={24}
        className="mobile-menu-icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {(true || isMobileMenuOpen) && (
        <nav className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className={`menu-link ${activeLink === link.path ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      <Button
        text={buttonText}
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1n_kIM4UJu87JDWelhCJmPeqy6q2buQJd/view?usp=sharing",
            "_blank",
          )
        }
      />
    </div>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
  buttonText: PropTypes.string.isRequired,
};
