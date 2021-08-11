import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "@components/shop/collection-item/collection-item.component";
import { CollectionSchema } from "./collection.schema";
import { selectShopCollection } from "@redux/shop/shop.selectors";

import "./collection.styles.scss";

const Collection = ({ collection: { title, items } }) => {
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

Collection.propTypes = { collection: PropTypes.shape(CollectionSchema) };

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { categoryId },
    },
  } = ownProps;
  return {
    // selectShopCollection returns a memoized function
    collection: selectShopCollection(categoryId)(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  // items: se => dispatch(action(param)),
});

export default withRouter(connect(mapStateToProps)(Collection));
