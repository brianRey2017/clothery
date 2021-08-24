import { fontSize } from "@theme/Theme";
import styled from "styled-components";

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: ${fontSize(10)} 0;
  display: flex;
  justify-content: space-between;
  border-bottom: ${fontSize(1)} solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;
