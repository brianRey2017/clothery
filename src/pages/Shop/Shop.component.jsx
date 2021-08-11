import React from "react";
import CollectionsOverview from "@components/shop/collections-overview/collections-overview.component";
import { Route, useRouteMatch } from "react-router-dom";
import Collection from "@components/shop/collection/collection.component";

const Shop = () => {
  const match = useRouteMatch();
  return (
    <div className="shop-page">
      <h1>SHOP</h1>
      <Route component={CollectionsOverview} exact path={`${match.path}`} />
      <Route component={Collection} exact path={`${match.path}/:categoryId`} />
    </div>
  );
};

export default Shop;
