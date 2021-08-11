import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

import {
  addItem,
  reduceItemQuantity,
  removeItem,
} from "@redux/cart/cart.actions";
import { CartItemSchema } from "@components/cart/cart-item-preview/cart-item.schema";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  addItem,
  item,
  reduceItemQuantityInCart,
  removeItem,
}) => {
  const { id: itemId, imageUrl, name, price, quantity } = item;
  const canReduceQuantity = quantity > 1;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className={`arrow ${!canReduceQuantity ? "disabled" : ""}`}
          onClick={() => {
            quantity > 1 && reduceItemQuantityInCart(itemId);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(itemId)}>
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  item: PropTypes.shape(CartItemSchema),
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (itemId) => dispatch(removeItem(itemId)),
  reduceItemQuantityInCart: (itemId) => dispatch(reduceItemQuantity(itemId)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
