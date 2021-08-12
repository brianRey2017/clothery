import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import React from "react";

import CollectionPreview from "@components/shop/collection-preview/collection-preview.component";
import { selectShopCollectionsForPreview } from "@redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} id={id} {...collectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  // property: (param) => dispatch(action(param)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionsOverview);
