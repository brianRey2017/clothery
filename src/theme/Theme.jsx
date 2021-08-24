import React from "react";
import { ThemeProvider } from "styled-components";
import { RED, GRAY, BLUE, WHITE, BLACK } from "./colors";

const FONT_SIZE_BASE = 18;
export const pxToRem = (sizeInPx) => `${sizeInPx / FONT_SIZE_BASE}rem`;

const theme = {
  colors: {
    danger: RED,
    dark: BLACK,
    main: WHITE,
    primary: BLUE,
    secondary: GRAY,
  },
  fonts: ["Open Sans Condensed", "sans-serif", "Roboto"],
  pxToRems: {
    small: pxToRem(12),
    medium: pxToRem(18),
    large: pxToRem(24),
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
