import { pxToRem } from "@theme/Theme";
import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  margin: ${pxToRem(45)} 0;
`;

export const StyledInput = styled.input`
  background: none;
  background-color: ${({ theme: { colors } }) => colors.main};
  color: ${({ theme: { colors } }) => colors.secondary};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  padding: ${pxToRem(10)} ${pxToRem(10)} ${pxToRem(10)} ${pxToRem(10)};
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: ${({ theme: { colors } }) =>
    `${pxToRem(1)} solid ${colors.secondary}`};
  margin: ${pxToRem(25)} 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    top: ${pxToRem(-14)};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    color: ${({ theme: { colors } }) => colors.dark};
  }
`;

export const StyledLabel = styled.label`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: ${pxToRem(5)};
  top: ${pxToRem(10)};
  transition: 300ms ease all;

  &.shrink {
    top: ${pxToRem(-14)};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    color: ${({ theme: { colors } }) => colors.dark};
  }
`;
