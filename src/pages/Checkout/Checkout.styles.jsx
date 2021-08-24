import styled from "styled-components";
import { fontSize } from "@theme/Theme";

export const TestWarningContainer = styled.div`
  margin: 40px auto;
`;

export const ItemsContainer = styled.div`
  width: 100%;
`;

export const SummaryContainer = styled.div`
  margin-top: ${fontSize(30)};
  margin-left: auto;
`;

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  overflow-y: hidden;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
