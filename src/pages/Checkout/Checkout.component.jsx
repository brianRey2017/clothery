import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import React from "react";

import { CheckoutHeader } from "@components/checkout/checkout-header/checkout-header.component";
import CheckoutItem from "@components/checkout/checkout-item/checkout-item.component";
import { EmptyCheckout } from "@components/checkout/empty-checkout/empty-checkout.component";
import { removeItem } from "@redux/cart/cart.actions";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "@redux/cart/cart.selectors";
import { StripeButton } from "@components/checkout/stripe-button/stripe-button.component";

import "./Checkout.styles.scss";

const Checkout = ({ cartItems, totalPrice }) => {
  const TEST_CREDIT_CARD_NUMBER =
    process.env["REACT_APP_STRIPE_TEST_CREDIT_CARD_NUMBER"];
  const TEST_CREDIT_CARD_EXPIRING_DATE = `01/${(new Date().getFullYear() + 1)
    .toString()
    .substr(-2)}`;
  const TEST_CREDIT_CARD_CVV =
    process.env["REACT_APP_STRIPE_TEST_CREDIT_CARD_CVV"];
  return (
    <div className="checkout-page">
      {cartItems.length ? (
        <div className="items-container">
          <CheckoutHeader />
          {cartItems.map(({ id, ...cartItemProps }) => (
            <CheckoutItem key={id} item={{ ...cartItemProps, id }} />
          ))}
          <div className="test-warning">
            <b>Please use the following test credit card for payments</b>
            <br />
            Number: {TEST_CREDIT_CARD_NUMBER} - Exp:{" "}
            {TEST_CREDIT_CARD_EXPIRING_DATE} - CVV: {TEST_CREDIT_CARD_CVV}
          </div>
          <div className="summary">
            <span>TOTAL: ${totalPrice}</span>
            <StripeButton price={totalPrice} />
          </div>
        </div>
      ) : (
        <EmptyCheckout />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemId) => dispatch(removeItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
