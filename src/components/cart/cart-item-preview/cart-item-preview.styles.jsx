import { flex, squaredSize } from "@theme/helpers";
import { ReactComponent as CloseIcon } from "@images/icons/cancel.svg";
import styled from "styled-components";
import { pxToRem } from "@theme/Theme";

export const CartItemPreviewContainer = styled.div`
  ${flex({ direction: "row", justifyContent: "space-between" })}
  margin-top: ${pxToRem(5)};
`;

export const CartItemContainer = styled.div`
  ${flex({ direction: "row", justifyContent: "flex-start" })}
  width: 80%;
`;

export const CartItemImage = styled.img`
  height: ${pxToRem(50)};
  width: ${pxToRem(40)};
  border-radius: ${pxToRem(5)};
`;

export const CartItemInfo = styled.span`
  margin-left: ${pxToRem(10)};
`;

export const RemoveCartItemIcon = styled(CloseIcon)`
  ${squaredSize(17)}
  cursor: pointer;
`;
