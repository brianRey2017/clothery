import React from "react";
import PropTypes from "prop-types";
import "./collection-preview.styles.scss";
import CollectionItem from "@components/collection-item/collection-item.component";

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(({ id, ...otherCollectionItemProps }) => (
          <CollectionItem key={id} id={id} {...otherCollectionItemProps} />
        ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  id: PropTypes.number.isRequired,
  items: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default CollectionPreview;
