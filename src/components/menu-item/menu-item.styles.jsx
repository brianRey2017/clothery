import { flex } from "@theme/helpers";
import { pxToRem } from "@theme/Theme";
import styled from "styled-components";

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${pxToRem(240)};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${pxToRem(1)} solid black;
  margin: 0 ${pxToRem(7.5)} ${pxToRem(15)};
  overflow: hidden;

  &.large {
    height: ${pxToRem(380)};
    flex-basis: 45%;
  }

  &:not(.large) {
    margin: auto ${pxToRem(7)};
  }

  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    &.content {
      opacity: 0.9;
    }
  }
`;

export const MenuItemContent = styled.div`
  height: ${pxToRem(90)};
  padding: 0 ${pxToRem(25)};
  ${flex()}
  border: ${pxToRem(1)} solid black;
  background-color: ${({ theme: { colors } }) => colors.main};
  opacity: 0.7;
  position: absolute;

  &:hover {
    opacity: 0.9;
  }
`;

export const MenuItemTitle = styled.h1`
  font-weight: bold;
  margin-bottom: ${pxToRem(6)};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  color: #4a4a4a;
`;

export const MenuItemSubitle = styled.span`
  font-weight: lighter;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  margin-bottom: ${pxToRem(10)};
`;

export const ImageContainer = styled.div`
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;
