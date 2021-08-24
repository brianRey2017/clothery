import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

import { addItem } from "@redux/cart/cart.actions";
import { CollectionItemSchema } from "./collection-item.schema";
import CustomButton from "@components/common/custom-button/custom-button.component";
import {
  CollectionItemContainer,
  CollectionItemImage,
  CollectionItemInfo,
  CollectionItemName,
  CollectionItemPrice,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <CollectionItemContainer>
      <CollectionItemImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionItemInfo>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>${price}</CollectionItemPrice>
      </CollectionItemInfo>
      <CustomButton
        className="add-item-to-cart"
        variant="inverted"
        onClick={() => addItem(item)}
      >
        ADD TO CART
      </CustomButton>
    </CollectionItemContainer>
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
