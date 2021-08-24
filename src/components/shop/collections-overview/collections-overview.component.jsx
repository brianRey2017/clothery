import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import React from "react";

import CollectionPreview from "@components/shop/collection-preview/collection-preview.component";
import { CollectionSchema } from "@components/shop/collection/collection.schema";
import { CollectionsOverviewContainer } from "./collections-overview.styles";
import { selectShopCollectionsForPreview } from "@redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} id={id} {...collectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

CollectionsOverview.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.shape(CollectionSchema)),
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
