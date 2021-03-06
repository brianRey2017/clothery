import { pxToRem } from "@theme/Theme";
import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: ${pxToRem(100)};
  border-bottom: ${pxToRem(1)} solid darkgrey;
  padding: ${pxToRem(15)} 0;
  font-size: ${pxToRem(20)};
  align-items: center;
`;

export const WideColumn = styled.span`
  width: 23%;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const QuantityControlsContainer = styled.div`
  display: flex;
`;

export const ArrowController = styled.span`
  cursor: pointer;
  &.disabled {
    display: none;
  }
`;

export const CurrentItemQuantity = styled.span`
  margin: 0 ${pxToRem(10)};
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
  width: 8%;
`;
