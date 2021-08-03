import React from "react";
import PropTypes from "prop-types";
import "./custom-button.styles.scss";

const CustomButton = ({ children, variant, inverted, ...otherProps }) => {
  return (
    <button
      className={`${variant ? variant : ""}
      ${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node,
  inverted: PropTypes.bool,
  variant: PropTypes.oneOf(["primary"]),
};

export default CustomButton;
