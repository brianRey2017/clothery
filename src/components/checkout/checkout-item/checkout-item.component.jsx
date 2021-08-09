import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

import { CartItemSchema } from "@schemas/cart-item.schema";
import { removeItemFromCart } from "@redux/cart/cart.utils";

import "./checkout-item.styles.scss";
import { addItem } from "@redux/cart/cart.actions";

const CheckoutItem = ({ item: { id, imageUrl, name, price, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

CheckoutItem.propTypes = {
  item: PropTypes.shape(CartItemSchema),
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (itemId) => dispatch(removeItemFromCart(itemId)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
