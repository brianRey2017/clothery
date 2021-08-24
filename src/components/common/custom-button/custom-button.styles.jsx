import { pxToRem } from "@theme/Theme";
import styled from "styled-components";

const COLOR_VARIANTS = {
  DANGER: "danger",
  INVERTED: "inverted",
  PRIMARY: "primary",
};

const getFontColorByVariant = (variant, { colors }) => {
  switch (variant) {
    case COLOR_VARIANTS.INVERTED:
      return colors.dark;
    case COLOR_VARIANTS.DANGER:
    case COLOR_VARIANTS.PRIMARY:
    default:
      return colors.main;
  }
};

const getHoverFontColorByVariant = (variant, { colors }) => {
  switch (variant) {
    case COLOR_VARIANTS.INVERTED:
    case COLOR_VARIANTS.DANGER:
    case COLOR_VARIANTS.PRIMARY:
      return colors.main;
    default:
      return colors.dark;
  }
};

const getBackgroundColorByVariant = (variant, { colors }) => {
  switch (variant) {
    case COLOR_VARIANTS.DANGER:
      return colors.danger;

    case COLOR_VARIANTS.INVERTED:
      return colors.main;

    case COLOR_VARIANTS.PRIMARY:
      return colors.primary;

    default:
      return colors.dark;
  }
};

const getHoverBackgroundColorByVariant = (variant, { colors }) => {
  switch (variant) {
    case COLOR_VARIANTS.DANGER:
      return colors.danger;

    case COLOR_VARIANTS.INVERTED:
      return colors.dark;

    case COLOR_VARIANTS.PRIMARY:
      return colors.primary;

    default:
      return colors.main;
  }
};

const getBorderByVariant = (variant, { colors }) => {
  switch (variant) {
    case COLOR_VARIANTS.INVERTED:
      return `${pxToRem(1)} solid ${colors.dark}`;

    case COLOR_VARIANTS.DANGER:
    case COLOR_VARIANTS.PRIMARY:
    default:
      return "none";
  }
};

const getHoverBorderByVariant = (variant, { colors }) => {
  switch (variant) {
    case COLOR_VARIANTS.DANGER:
    case COLOR_VARIANTS.PRIMARY:
    case COLOR_VARIANTS.INVERTED:
      return "none";
    default:
      return `${pxToRem(1)} solid ${colors.dark}`;
  }
};

export const StyledButton = styled.button`
  background-color: ${({ variant, theme }) =>
    getBackgroundColorByVariant(variant, theme)};
  border-radius: ${({ isRounded }) => (isRounded ? "10" : null)};
  border: ${({ variant, theme }) => getBorderByVariant(variant, theme)};
  color: ${({ variant, theme }) => getFontColorByVariant(variant, theme)};
  cursor: pointer;
  display: flex;
  font-family: "Open Sans Condensed";
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  font-weight: bolder;
  height: ${pxToRem(50)};
  justify-content: center;
  letter-spacing: ${pxToRem(0.5)};
  line-height: ${pxToRem(50)};
  min-width: ${pxToRem(165)};
  padding: 0 ${pxToRem(35)} 0 ${pxToRem(35)};
  text-transform: uppercase;
  width: auto;

  &:hover {
    background-color: ${({ variant, theme }) =>
      getHoverBackgroundColorByVariant(variant, theme)};
    color: ${({ variant, theme }) =>
      getHoverFontColorByVariant(variant, theme)};
    border: ${({ variant, theme }) => getHoverBorderByVariant(variant, theme)};
  }
`;

export const StyledTextWithIconContainer = styled.span`
  display: flex;
  align-items: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
`;

export const IconWrapper = styled.div`
  svg {
    width: ${pxToRem(18)};
    height: ${pxToRem(18)};
    fill: white;
    margin-right: ${pxToRem(10)};
    margin-top: 1.1rem;
  }
`;
