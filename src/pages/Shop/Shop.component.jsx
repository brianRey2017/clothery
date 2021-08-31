import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import CollectionsOverview from "@components/shop/collections-overview/collections-overview.component";
import Collection from "@components/shop/collection/collection.component";
import { triggerFetchCollectionsAsync } from "@redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from "@redux/shop/shop.selectors";
import WithSpinner from "@components/common/with-spinner/with-spinner.component";

const Shop = ({ fetchCollections, isCollectionsLoaded, loading }) => {
  const match = useRouteMatch();

  useEffect(() => fetchCollections(), []);

  const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
  const CollectionWithSpinner = WithSpinner(Collection);

  return (
    <div className="shop-page">
      <h1>SHOP</h1>
      <Route
        component={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
        exact
        path={`${match.path}`}
      />
      <Route
        render={(props) => (
          <CollectionWithSpinner isLoading={!isCollectionsLoaded} {...props} />
        )}
        exact
        path={`${match.path}/:categoryId`}
      />
    </div>
  );
};

Shop.propTypes = {
  isCollectionsLoaded: PropTypes.bool,
  loading: PropTypes.bool,
  fetchCollections: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: (collections) =>
    dispatch(triggerFetchCollectionsAsync(collections)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
