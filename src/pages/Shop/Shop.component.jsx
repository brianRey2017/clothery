import React, { useEffect } from "react";
import CollectionsOverview from "@components/shop/collections-overview/collections-overview.component";
import { Route, useRouteMatch } from "react-router-dom";
import Collection from "@components/shop/collection/collection.component";
import CollectionsService from "@services/collection";
import { connect } from "react-redux";
import { updateCollections } from "@redux/shop/shop.actions";

const Shop = ({ updateCollections }) => {
  const match = useRouteMatch();
  let unsubscribeFromSnapshot = null;

  useEffect(async () => {
    // check how to add onSnapShot FUNCTIONALITY
    // LESSON: BEFORE DESIGNING A LIB THINK ALL THE USE CASES AND IF IT WILL BE READABLE
    const collections = await CollectionsService.getCollections({
      getItems: true,
    });
    updateCollections(collections);
  }, [unsubscribeFromSnapshot]);
  return (
    <div className="shop-page">
      <h1>SHOP</h1>
      <Route component={CollectionsOverview} exact path={`${match.path}`} />
      <Route component={Collection} exact path={`${match.path}/:categoryId`} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
