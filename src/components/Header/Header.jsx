import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Button from "../common/Button/Button";
import "./Header.css";
import { HiMenuAlt2 } from "react-icons/hi";

export default function Header({ links, buttonText }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const activeLinkRef = useRef("#home");

  // Scroll listener to update active link
  useEffect(() => {
    const sections = links
      .map((link) => ({
        path: link.path,
        element: document.querySelector(link.path),
      }))
      .filter((item) => item.element);

    let ticking = false;

    const updateActiveLink = () => {
      ticking = false;
      let nextActive = activeLinkRef.current;

      for (const item of sections) {
        const top = item.element.getBoundingClientRect().top;
        if (top <= 100 && top >= -item.element.offsetHeight + 100) {
          nextActive = item.path;
          break;
        }
      }

      if (nextActive !== activeLinkRef.current) {
        activeLinkRef.current = nextActive;
        setActiveLink(nextActive);
      }
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveLink);
    };

    updateActiveLink();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
            "https://drive.google.com/file/d/1zqC1aJ6wvogKPtbnZXXE79ZST89x8J7f/view?usp=drive_link",
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
