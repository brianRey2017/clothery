import { flex } from "@theme/helpers";
import { pxToRem } from "@theme/Theme";
import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  ${flex({ alignItems: "flex-start" })}
  margin-bottom: ${pxToRem(30)};
`;

export const CollectionTitle = styled.h1`
  font-size: ${pxToRem(28)};
  margin-bottom: ${pxToRem(25)};
  cursor: pointer;
  width: fit-content;
  &:hover {
    color: ${({ theme: { colors } }) => colors.secondary};
    transform: scale(1.07);
    transition: transform 0.3s;
  }
`;

export const CollectionPreviewItems = styled.div`
  ${flex({ direction: "row", justifyContent: "space-between" })}
  width: 100%;
`;
