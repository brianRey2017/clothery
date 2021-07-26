import React from "react";
import PropTypes from "prop-types";
import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node,
};

export default CustomButton;
