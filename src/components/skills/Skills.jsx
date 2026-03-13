import React from "react";
import PropTypes from "prop-types";
import "./Skills.css";

export default function Skills({ techStack }) {
  return (
    <div className="tech-stack">
      <div className="tech-row">
        <h3 className="tech-heading">Tech tools</h3>
        <div className="tech-marquee" aria-label="Scrolling tech stack">
          <div className="tech-track">
            <ul className="tech-group">
              {techStack.map((tech) => (
                <li key={`group-a-${tech}`} className="tech-item">
                  <i className={`${tech} tech-icon`}></i>
                </li>
              ))}
            </ul>

            <ul className="tech-group" aria-hidden="true">
              {techStack.map((tech) => (
                <li key={`group-b-${tech}`} className="tech-item">
                  <i className={`${tech} tech-icon`}></i>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Skills.propTypes = {
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
};
