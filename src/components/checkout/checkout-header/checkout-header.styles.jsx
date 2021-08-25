import { pxToRem } from "@theme/Theme";
import styled from "styled-components";

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: ${pxToRem(10)} 0;
  display: flex;
  justify-content: space-between;
  border-bottom: ${pxToRem(1)} solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;
