import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

import {
  addItem,
  reduceItemQuantity,
  removeItem,
} from "@redux/cart/cart.actions";
import { CartItemSchema } from "@components/cart/cart-item-preview/cart-item.schema";
import {
  ArrowController,
  CheckoutItemContainer,
  CurrentItemQuantity,
  ImageContainer,
  RemoveButtonContainer,
  WideColumn,
} from "./checkout-item.styles";

const CheckoutItem = ({
  addItem,
  item,
  reduceItemQuantityInCart,
  removeItem,
}) => {
  const { id: itemId, imageUrl, name, price, quantity } = item;
  const canReduceQuantity = quantity > 1;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <WideColumn>{name}</WideColumn>
      <WideColumn>
        <ArrowController
          className={`${!canReduceQuantity ? "disabled" : ""}`}
          onClick={() => {
            quantity > 1 && reduceItemQuantityInCart(itemId);
          }}
        >
          &#10094;
        </ArrowController>
        <CurrentItemQuantity>{quantity}</CurrentItemQuantity>
        <ArrowController onClick={() => addItem(item)}>
          &#10095;
        </ArrowController>
      </WideColumn>
      <WideColumn>{price}</WideColumn>
      <RemoveButtonContainer onClick={() => removeItem(itemId)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

CheckoutItem.propTypes = {
  addItem: PropTypes.func,
  item: PropTypes.shape(CartItemSchema),
  reduceItemQuantityInCart: PropTypes.func,
  removeItem: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (itemId) => dispatch(removeItem(itemId)),
  reduceItemQuantityInCart: (itemId) => dispatch(reduceItemQuantity(itemId)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
