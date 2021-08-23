import styled from "styled-components";

const PRIMARY_BLUE = " #357ae8";
const DANGER_RED = "#dc3545";
const BLACK = "#000000";
const WHITE = "#ffffff";

const COLOR_VARIANTS = {
  DANGER: "danger",
  INVERTED: "inverted",
  PRIMARY: "primary",
};

const getFontColorByVariant = (variant) => {
  switch (variant) {
    case COLOR_VARIANTS.INVERTED:
      return BLACK;
    case COLOR_VARIANTS.DANGER:
    case COLOR_VARIANTS.PRIMARY:
    default:
      return WHITE;
  }
};

const getHoverFontColorByVariant = (variant) => {
  switch (variant) {
    case COLOR_VARIANTS.INVERTED:
    case COLOR_VARIANTS.DANGER:
    case COLOR_VARIANTS.PRIMARY:
      return WHITE;
    default:
      return BLACK;
  }
};

const getBackgroundColorByVariant = (variant) => {
  switch (variant) {
    case COLOR_VARIANTS.DANGER:
      return DANGER_RED;

    case COLOR_VARIANTS.INVERTED:
      return WHITE;

    case COLOR_VARIANTS.PRIMARY:
      return PRIMARY_BLUE;

    default:
      return BLACK;
  }
};

const getHoverBackgroundColorByVariant = (variant) => {
  switch (variant) {
    case COLOR_VARIANTS.DANGER:
      return DANGER_RED;

    case COLOR_VARIANTS.INVERTED:
      return BLACK;

    case COLOR_VARIANTS.PRIMARY:
      return PRIMARY_BLUE;

    default:
      return WHITE;
  }
};

const getBorderByVariant = (variant) => {
  switch (variant) {
    case COLOR_VARIANTS.INVERTED:
      return `1px solid ${BLACK}`;

    case COLOR_VARIANTS.DANGER:
    case COLOR_VARIANTS.PRIMARY:
    default:
      return "none";
  }
};

const getHoverBorderByVariant = (variant) => {
  switch (variant) {
    case COLOR_VARIANTS.DANGER:
    case COLOR_VARIANTS.PRIMARY:
    case COLOR_VARIANTS.INVERTED:
      return "none";
    default:
      return `1px solid ${BLACK}`;
  }
};

export const StyledButton = styled.button`
  background-color: ${({ variant }) => getBackgroundColorByVariant(variant)};
  border-radius: ${({ isRounded }) => (isRounded ? "10px" : null)};
  border: ${({ variant }) => getBorderByVariant(variant)};
  color: ${({ variant }) => getFontColorByVariant(variant)};
  cursor: pointer;
  display: flex;
  font-family: "Open Sans Condensed";
  font-size: 15px;
  font-weight: bolder;
  height: 50px;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  min-width: 165px;
  padding: 0 35px 0 35px;
  text-transform: uppercase;
  width: auto;

  &:hover {
    background-color: ${({ variant }) =>
      getHoverBackgroundColorByVariant(variant)};
    color: ${({ variant }) => getHoverFontColorByVariant(variant)};
    border: ${({ variant }) => getHoverBorderByVariant(variant)};
  }
`;

export const StyledTextWithIconContainer = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px !important;
`;

export const IconWrapper = styled.div`
  svg {
    width: 18px;
    height: 18px;
    fill: white;
    margin-right: 10px;
    margin-top: 1.1rem;
  }
`;
