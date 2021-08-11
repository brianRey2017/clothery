import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

import { addItem } from "@redux/cart/cart.actions";
import { CollectionItemSchema } from "@schemas/collection-item.schema";
import CustomButton from "@components/common/custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { id, imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.shape(CollectionItemSchema),
  addItem: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
