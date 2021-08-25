import CustomButton from "@components/common/custom-button/custom-button.component";
import { flex } from "@theme/helpers";
import { pxToRem } from "@theme/Theme";
import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: ${pxToRem(240)};
  height: ${pxToRem(340)};
  display: flex;
  flex-direction: column;
  padding: ${pxToRem(20)};
  border: ${pxToRem(1)} solid ${({ theme: { colors } }) => colors.dark};
  background-color: ${({ theme: { colors } }) => colors.main};
  top: ${pxToRem(90)};
  right: ${pxToRem(40)};
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: ${pxToRem(240)};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmptyCartMessage = styled.span`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  margin: 50% auto;
`;

export const ButtonsContainer = styled.div`
  ${flex({ justifyContent: "space-around", alignItems: "center" })}
`;

export const StyledCustomButton = styled(CustomButton)`
  width: 100%;
  margin-top: ${pxToRem(5)};
`;
