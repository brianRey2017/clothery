export const flex = ({
  alignItems = "center",
  direction = "column",
  justifyContent = "center",
}) => `
  display: flex;
  flex-direction: ${direction};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;
