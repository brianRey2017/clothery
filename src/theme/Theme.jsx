import React from "react";
import { ThemeProvider } from "styled-components";
import { RED, GRAY, BLUE, WHITE, BLACK } from "./colors";

const FONT_SIZE_BASE = 18;
export const fontSize = (sizeInPx) => `${sizeInPx / FONT_SIZE_BASE}rem`;

const theme = {
  colors: {
    danger: RED,
    dark: BLACK,
    main: WHITE,
    primary: BLUE,
    secondary: GRAY,
  },
  fonts: ["Open Sans Condensed", "sans-serif", "Roboto"],
  fontSizes: {
    small: fontSize(12),
    medium: fontSize(18),
    large: fontSize(24),
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
