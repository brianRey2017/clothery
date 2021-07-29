import React from "react";
import PropTypes from "prop-types";
import "./custom-button.styles.scss";

const CustomButton = ({ children, variant, ...otherProps }) => {
  return (
    <button
      className={`${variant ? variant : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["primary"]),
};

export default CustomButton;
