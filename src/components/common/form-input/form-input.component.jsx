import React from "react";
import PropTypes from "prop-types";
import { FormContainer, StyledInput, StyledLabel } from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const { value: inputValue } = otherProps;
  return (
    <FormContainer>
      <StyledInput
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label && (
        <StyledLabel className={`${inputValue.length ? "shrink" : ""}`}>
          {label}
        </StyledLabel>
      )}
    </FormContainer>
  );
};

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default FormInput;
