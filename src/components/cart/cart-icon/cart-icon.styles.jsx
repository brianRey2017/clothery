import { flex, squaredSize } from "@theme/helpers";
import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "@images/shopping-bag.svg";
import { pxToRem } from "@theme/Theme";

export const CartIconContainer = styled.div`
  ${squaredSize(45)}
  ${flex({ direction: "row", alignItems: "center", justifyContent: "center" })}
  position: relative;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  font-weight: bold;
  bottom: ${pxToRem(10)};
`;

export const CartBasketIcon = styled(ShoppingIcon)`
  ${squaredSize(28)}
`;
