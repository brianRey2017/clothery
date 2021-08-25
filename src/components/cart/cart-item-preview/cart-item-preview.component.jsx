import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemPreviewContainer,
  RemoveCartItemIcon,
} from "./cart-item-preview.styles";
import { removeItem } from "@redux/cart/cart.actions";

const CartItemPreview = ({ item, removeItemFromCart }) => {
  const { id, imageUrl, name, price, quantity } = item;
  return (
    <CartItemPreviewContainer>
      <CartItemContainer>
        <CartItemImage src={imageUrl} />
        <CartItemInfo>
          {name}
          <br />
          {quantity > 1 ? ` X ${quantity}U:` : ""} ${price * quantity}
        </CartItemInfo>
      </CartItemContainer>
      <RemoveCartItemIcon
        onClick={() => {
          removeItemFromCart(id);
        }}
      />
    </CartItemPreviewContainer>
  );
};

CartItemPreview.propTypes = {
  item: PropTypes.object.isRequired,
  removeItemFromCart: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (itemId) => dispatch(removeItem(itemId)),
});

export default connect(null, mapDispatchToProps)(CartItemPreview);
