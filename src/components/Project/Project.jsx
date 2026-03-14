import React, { useState } from "react";
import "./Project.css";
import PropTypes from "prop-types";
import Button from "../common/Button/Button";
import { FaPlay } from "react-icons/fa";
import VideoModel from "../Model/VideoModel";

export default function Project({ project, index }) {
  const [openModel, setOpenModel] = useState(false);

  const handleButtonClick = () => {
    if (project.type === "design") {
      setOpenModel(true);
      return;
    }

    if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  const { title, description, techStack, image, logo, type, video } = project;
  const buttonText =
    type === "design"
      ? "Play Video"
      : type === "app"
        ? "Visit Github"
        : "Visit Website";

  return (
    <div className={`project project-card-${index + 1}`}>
      <div className="project-content">
        <div className="project-logo">
          <div className="logo-image">
            <img
              src={logo}
              alt={title}
              className="logo"
              loading="lazy"
              decoding="async"
              width="24"
              height="24"
            />
          </div>
          <span className="project-name">{title}</span>
        </div>
        <h3 className="project-description">{description}</h3>
        <div className="tech-stack">
          {techStack.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
        <Button
          text={buttonText}
          variant="primary"
          projectType={type}
          onClick={handleButtonClick}
          icon={type === "design" && <FaPlay className="play-icon" />}
        />
      </div>
      <div className="image-container">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </div>
      {openModel && (
        <VideoModel
          video={video}
          title={title}
          onClose={() => setOpenModel(false)}
        />
      )}
    </div>
  );
}

Project.propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    link: PropTypes.string,
    video: PropTypes.string,
  }).isRequired,
};
