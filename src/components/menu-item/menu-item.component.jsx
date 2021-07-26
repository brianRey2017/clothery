import React from "react";
import PropTypes from "prop-types"; // ES6
import "./menu-item.styles.scss";
import { useHistory } from "react-router-dom";

export const MenuItem = ({ id, imageUrl, title, size }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/categories/${id}`);
  };

  return (
    <div className={`menu-item ${size}`} onClick={() => handleClick()}>
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
};

MenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
  title: PropTypes.string.isRequired,
};
