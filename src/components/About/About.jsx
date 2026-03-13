import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section container" id="about">
      <h2 className="section-header">About Me</h2>
      <div className="about-info">
        <div className="about-image-container">
          <img
            src="https://res.cloudinary.com/dmvrtwdp0/image/upload/v1772959930/Me_iishom.png"
            alt="Muzuvukile"
            className="about-image"
            loading="lazy"
          />
        </div>
        <div className="about-content">
          <h2 className="about-text">
            " <span className="text-muted">Building </span>
            <span className="text-strong">end-to-end web applications </span>
            <span className="text-muted">that are </span>
            <span className="text-strong">fast, scalable, and reliable.</span>
            <span className="text-muted">Experienced across </span>
            <span className="text-strong">
              frontend development, backend systems, and data workflows,{" "}
            </span>
            <span className="text-muted">creating solutions that are </span>
            <span className="text-strong">
              clean, maintainable, and performance focused.
            </span>
            <span className="text-muted">Focused on turning </span>
            <span className="text-strong">
              complex ideas into practical digital solutions{" "}
            </span>
            <span className="text-muted">that deliver </span>
            <span className="text-strong">
              real value for users and businesses.
            </span>
            "
          </h2>
        </div>
      </div>
    </section>
  );
}
