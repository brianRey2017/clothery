import React from "react";
import PropTypes from "prop-types";

import CollectionItem from "@components/shop/collection-item/collection-item.component";
import { CollectionSchema } from "@components/shop/collection/collection.schema";
import { Link } from "react-router-dom";
import {
  CollectionPreviewContainer,
  CollectionPreviewItems,
  CollectionTitle,
} from "./collection-preview.styles";

const CollectionPreview = ({
  items,
  title,
  routeName,
  maxItemsPreview = 4,
}) => {
  return (
    <CollectionPreviewContainer>
      <CollectionTitle>
        <Link to={`shop/${routeName}`}>{title.toUpperCase()}</Link>
      </CollectionTitle>
      <CollectionPreviewItems>
        {items.slice(0, maxItemsPreview).map((item) => (
          <CollectionItem key={item.id} id={item.id} item={item} />
        ))}
      </CollectionPreviewItems>
    </CollectionPreviewContainer>
  );
};

CollectionPreview.propTypes = {
  ...CollectionSchema,
  maxItemsPreview: PropTypes.number,
};

export default CollectionPreview;
