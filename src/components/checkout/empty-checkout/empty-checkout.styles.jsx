import { flex } from "@theme/helpers";
import { pxToRem } from "@theme/Theme";
import styled from "styled-components";
import { ReactComponent as CartIcon } from "@images/shopping-bag.svg";

export const EmptyCheckoutContainer = styled.div`
  ${flex({ alignItems: "center" })}
  margin: ${pxToRem(50)} auto;
  height: 100%;
  min-height: ${pxToRem(500)};
`;

export const CartIconContainer = styled(CartIcon)`
  width: 25%;
`;

export const EmptyCheckoutMessageContainer = styled.div`
  ${flex("column")}
`;

export const EmptyCheckoutMessageTitle = styled.h2``;

export const EmptyCheckoutMessageDescription = styled.span`
  font-size: ${pxToRem(20)};
`;

export const ButtonContainer = styled.div`
  margin: ${pxToRem(30)};
`;
