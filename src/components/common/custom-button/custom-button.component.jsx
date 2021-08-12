import React from "react";
import PropTypes from "prop-types";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  Icon,
  inverted,
  rounded,
  variant,
  ...otherProps
}) => {
  return (
    <button
      className={`${variant ? variant : ""}
      ${inverted ? "inverted" : ""} ${rounded ? "rounded" : ""} custom-button`}
      {...otherProps}
    >
      {Icon ? (
        <span className="content-with-icon">
          <Icon className="custom-button-icon" />
          {children}
        </span>
      ) : (
        { children }
      )}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node,
  Icon: PropTypes.elementType,
  inverted: PropTypes.bool,
  rounded: PropTypes.bool,
  variant: PropTypes.oneOf(["danger", "primary"]),
};

export default CustomButton;
