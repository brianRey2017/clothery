import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import React from "react";

import { CheckoutHeader } from "@components/checkout/checkout-header/checkout-header.component";
import CheckoutItem from "@components/checkout/checkout-item/checkout-item.component";
import { removeItem } from "@redux/cart/cart.actions";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "@redux/cart/cart.selectors";

import "./Checkout.styles.scss";

const Checkout = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <CheckoutHeader />
    {cartItems.map(({ id, ...cartItemProps }) => (
      <CheckoutItem key={id} item={{ ...cartItemProps, id }} />
    ))}
    <div className="total">
      <span>TOTAL: ${totalPrice}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemId) => dispatch(removeItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
