import { flex } from "@theme/helpers";
import { pxToRem } from "@theme/Theme";
import styled from "styled-components";
import CollectionItemComponent from "@components/shop/collection-item/collection-item.component";

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
    margin: ${pxToRem(30)} auto;
  }
`;

export const StyledCollectionItem = styled(CollectionItemComponent)`
  background-color: red;
`;
