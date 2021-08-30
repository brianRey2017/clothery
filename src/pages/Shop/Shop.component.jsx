import React, { useEffect, useState } from "react";
import CollectionsOverview from "@components/shop/collections-overview/collections-overview.component";
import { Route, useRouteMatch } from "react-router-dom";
import Collection from "@components/shop/collection/collection.component";
import CollectionsService from "@services/collection";
import { connect } from "react-redux";
import { updateCollections } from "@redux/shop/shop.actions";
import WithSpinner from "@components/common/with-spinner/with-spinner.component";

const Shop = ({ updateCollections }) => {
  const match = useRouteMatch();
  const [loading, setLoading] = useState(true);
  let unsubscribeFromSnapshot = null;

  useEffect(async () => {
    // check how to add onSnapShot FUNCTIONALITY
    const collections = await CollectionsService.getCollections({
      getItems: true,
    });
    updateCollections(collections);
    setLoading(false);
  }, [unsubscribeFromSnapshot]);

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
          <CollectionWithSpinner isLoading={loading} {...props} />
        )}
        exact
        path={`${match.path}/:categoryId`}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
