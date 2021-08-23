const PRIMARY_BLUE = " #357ae8";
const DANGER_RED = "#dc3545";
const BLACK = "#000000";
const WHITE = "#ffffff";

const COLOR_VARIANTS = {
  DANGER: "danger",
  INVERTED: "inverted",
  PRIMARY: "primary",
};

export const getFontColorByVariant = (variant) => {
  switch (variant) {
    case COLOR_VARIANTS.INVERTED:
      return BLACK;
    case COLOR_VARIANTS.DANGER:
    case COLOR_VARIANTS.PRIMARY:
    default:
      return WHITE;
  }
};

export const getHoverFontColorByVariant = (variant) => {
  switch (variant) {
    case COLOR_VARIANTS.INVERTED:
    case COLOR_VARIANTS.DANGER:
    case COLOR_VARIANTS.PRIMARY:
      return WHITE;
    default:
      return BLACK;
  }
};

export const getBackgroundColorByVariant = (variant) => {
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

export const getHoverBackgroundColorByVariant = (variant) => {
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

export const getBorderByVariant = (variant) => {
  switch (variant) {
    case COLOR_VARIANTS.INVERTED:
      return `1px solid ${BLACK}`;

    case COLOR_VARIANTS.DANGER:
    case COLOR_VARIANTS.PRIMARY:
    default:
      return "none";
  }
};

export const getHoverBorderByVariant = (variant) => {
  switch (variant) {
    case COLOR_VARIANTS.DANGER:
    case COLOR_VARIANTS.PRIMARY:
    case COLOR_VARIANTS.INVERTED:
      return "none";
    default:
      return `1px solid ${BLACK}`;
  }
};
