import React from "react";
import "./HeroSection.css";
import PropTypes from "prop-types";
import Skills from "../skills/Skills";

export default function HeroSection({ Title, openForWork, techStack }) {
  const statusColor = openForWork ? "#52b788" : "#ee6055";

  return (
    <div className="hero-section container">
      <div className="content">
        <h1 className="hero-heading">"{Title}"</h1>

        <div className="status">
          <div
            className="dot-indicator"
            style={{ "--status-color": statusColor }}
          ></div>
          <span className="dot-text">
            {openForWork ? "Open to opportunities" : "Not Available for work"}
          </span>
        </div>
        <Skills techStack={techStack} />
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  Title: PropTypes.node.isRequired,
  openForWork: PropTypes.bool,
  techStack: PropTypes.arrayOf(PropTypes.string),
};
