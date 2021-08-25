import { flex } from "@theme/helpers";
import { pxToRem } from "@theme/Theme";
import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: ${pxToRem(380)};
  display: flex;
  flex-direction: column;
`;

export const SignUpHeader = styled.h1`
  margin-bottom: ${pxToRem(10)};
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  ${flex({ direction: "row", justifyContent: "space-between" })}
`;
