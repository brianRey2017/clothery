import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import React from "react";

import CollectionPreview from "@components/shop/collection-preview/collection-preview.component";
import { selectShopCollectionsForPreview } from "@redux/shop/shop.selectors";

import "./collections-overview.styles.scss";
import { CollectionSchema } from "../collection/collection.schema";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} id={id} {...collectionProps} />
      ))}
    </div>
  );
};

CollectionsOverview.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.shape(CollectionSchema)),
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
