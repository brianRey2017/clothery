import { flex } from "@theme/helpers";
import { pxToRem } from "@theme/Theme";
import styled from "styled-components";

export const CollectionContainer = styled.div`
  ${flex({})}
`;

export const CollectionTitle = styled.h1`
  font-size: ${pxToRem(38)};
  margin: 0 auto ${pxToRem(30)};
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin: 0px auto;
  .collection-item {
    margin: ${pxToRem(300)} auto !important;
  }
`;
