import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import { withRouter } from "react-router-dom";

import {
  CollectionContainer,
  CollectionItemsContainer,
  CollectionTitle,
} from "./collection.styles";
import CollectionItem from "@components/shop/collection-item/collection-item.component";
import { CollectionSchema } from "./collection.schema";
import { selectShopCollection } from "@redux/shop/shop.selectors";

const Collection = ({ collection: { title, items } }) => {
  const toTitleCase = (phrase) =>
    phrase.charAt(0).toUpperCase() + phrase.slice(1);

  return (
    <CollectionContainer>
      <CollectionTitle>{toTitleCase(title)}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem
            key={item.id}
            item={item}
            className="collection-item"
          />
        ))}
      </CollectionItemsContainer>
    </CollectionContainer>
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

export default withRouter(connect(mapStateToProps)(Collection));
