import React from "react";
import PropTypes from "prop-types"; // ES6
import "./menu-item.styles.scss";

export const MenuItem = ({ imageUrl, title, size }) => (
  <div className={`menu-item ${size}`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
  title: PropTypes.string.isRequired,
};
