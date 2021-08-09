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
import { EmptyCheckout } from "@components/checkout/empty-checkout/empty-checkout.component";
import CustomButton from "@components/common/custom-button/custom-button.component";

const Checkout = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    {cartItems.length ? (
      <div className="items-container">
        <CheckoutHeader />
        {cartItems.map(({ id, ...cartItemProps }) => (
          <CheckoutItem key={id} item={{ ...cartItemProps, id }} />
        ))}
        <div className="summary">
          <span>TOTAL: ${totalPrice}</span>
          <CustomButton variant="primary">PAY ${totalPrice}</CustomButton>
        </div>
      </div>
    ) : (
      <EmptyCheckout />
    )}
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
