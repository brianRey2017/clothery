import React from "react";
import PropTypes from "prop-types";

import CollectionItem from "@components/shop/collection-item/collection-item.component";
import { CollectionSchema } from "../collection/collection.schema";
import "./collection-preview.styles.scss";
import { Link } from "react-router-dom";

const CollectionPreview = ({
  items,
  title,
  routeName,
  maxItemsPreview = 4,
}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">
        <Link to={`shop/${routeName}`}>{title.toUpperCase()}</Link>
      </h1>
      <div className="preview">
        {items.slice(0, maxItemsPreview).map((item) => (
          <CollectionItem key={item.id} id={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  ...CollectionSchema,
  maxItemsPreview: PropTypes.number,
};

export default CollectionPreview;
