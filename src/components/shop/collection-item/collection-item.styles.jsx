import { flex } from "@theme/helpers";
import { pxToRem } from "@theme/Theme";
import styled from "styled-components";

export const CollectionItemContainer = styled.div`
  ${flex()}
  height: ${pxToRem(350)};
  width: 22vw;
  position: relative;

  .add-item-to-cart {
    width: 80%;
    opacity: 0;
    position: absolute;
    top: ${pxToRem(255)};
  }

  &:hover {
    .add-item-to-cart {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const CollectionItemImage = styled.div`
  background-position: center;
  background-size: cover;
  height: 95%;
  margin-bottom: ${pxToRem(5)};
  width: 100%;

  &:hover {
    opacity: 0.6;
    border-radius: ${pxToRem(30)} ${pxToRem(20)} ${pxToRem(40)} ${pxToRem(20)};
    transform: scale(1.03);
    transition: border-radius 300ms;
  }
`;

export const CollectionItemInfo = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
`;

export const CollectionItemName = styled.span``;
export const CollectionItemPrice = styled.span``;
