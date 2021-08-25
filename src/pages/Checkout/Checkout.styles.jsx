import styled from "styled-components";
import { pxToRem } from "@theme/Theme";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  overflow-y: hidden !important;
  overflow-x: auto !important;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TestWarningContainer = styled.div`
  margin: 40px auto;
`;

export const ItemsContainer = styled.div`
  width: 100%;
`;

export const SummaryContainer = styled.div`
  margin-top: ${pxToRem(30)};
  margin-left: auto;
`;
