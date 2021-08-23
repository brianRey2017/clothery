import React from "react";
import PropTypes from "prop-types";
import {
  StyledButton,
  IconWrapper,
  StyledTextWithIconContainer,
} from "./custom-button.styles";

const CustomButton = ({ children, Icon, rounded, variant, ...otherProps }) => {
  return (
    <StyledButton variant={variant} isRounded={rounded} {...otherProps}>
      {Icon ? (
        <StyledTextWithIconContainer className="content-with-icon">
          <IconWrapper>
            <Icon />
          </IconWrapper>
          {children}
        </StyledTextWithIconContainer>
      ) : (
        children
      )}
    </StyledButton>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node,
  Icon: PropTypes.elementType,
  rounded: PropTypes.bool,
  variant: PropTypes.oneOf(["danger", "primary", "inverted"]),
};

export default CustomButton;
