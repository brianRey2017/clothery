import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as CloseIcon } from "@images/icons/cancel.svg";
import { removeItem } from "@redux/cart/cart.actions";

import "./cart-item-preview.styles.scss";

const CartItemPreview = ({ item, removeItemFromCart }) => {
  const { id, imageUrl, name, price, quantity } = item;
  return (
    <div className="cart-item-preview">
      <div className="item">
        <img className="item-image" src={imageUrl} />
        <span className="item-info">
          {name}
          <br />
          {quantity > 1 ? ` X ${quantity}U` : ""}: ${price * quantity}
        </span>
      </div>
      <CloseIcon
        className="remove-item-icon"
        onClick={() => {
          removeItemFromCart(id);
        }}
      />
    </div>
  );
};

CartItemPreview.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (itemId) => dispatch(removeItem(itemId)),
});

export default connect(null, mapDispatchToProps)(CartItemPreview);
