import { fontSize } from "@theme/Theme";
import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  margin: ${fontSize(45)} 0;
`;

export const StyledInput = styled.input`
  background: none;
  background-color: ${({ theme: { colors } }) => colors.main};
  color: ${({ theme: { colors } }) => colors.secondary};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  padding: ${fontSize(10)} ${fontSize(10)} ${fontSize(10)} ${fontSize(10)};
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: ${({ theme: { colors } }) =>
    `${fontSize(1)} solid ${colors.secondary}`};
  margin: ${fontSize(25)} 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    top: ${fontSize(-14)};
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
  left: ${fontSize(5)};
  top: ${fontSize(10)};
  transition: 300ms ease all;

  &.shrink {
    top: ${fontSize(-14)};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    color: ${({ theme: { colors } }) => colors.dark};
  }
`;
