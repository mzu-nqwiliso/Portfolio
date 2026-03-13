import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default function Button({
  text,
  onClick,
  size = "medium",
  variant = "primary",
  icon = null,
  type = "button",
  projectType = "",
}) {
  return (
    <button
      className={`button ${size} ${variant} ${projectType ? `project-type-${projectType}` : ""}`}
      onClick={onClick}
      type={type}
    >
      {icon && <span className="icon">{icon}</span>}
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  icon: PropTypes.element,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  projectType: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
};
