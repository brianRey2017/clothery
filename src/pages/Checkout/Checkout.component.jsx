import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import React from "react";
import PropTypes from "prop-types";

import { CheckoutHeader } from "@components/checkout/checkout-header/checkout-header.component";
import CheckoutItem from "@components/checkout/checkout-item/checkout-item.component";
import { EmptyCheckout } from "@components/checkout/empty-checkout/empty-checkout.component";
import { removeItem } from "@redux/cart/cart.actions";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "@redux/cart/cart.selectors";

import { CartItemSchema } from "@components/cart/cart-item-preview/cart-item.schema";
import {
  CheckoutPageContainer,
  ItemsContainer,
  SummaryContainer,
  TestWarningContainer,
} from "./Checkout.styles";
import CheckoutSummary from "@components/checkout/summary/checkout-summary.component";
import { StripeTestWarningMessage } from "@components/checkout/test-warning-message/test-warning-message.component";

const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <CheckoutPageContainer>
      {cartItems.length ? (
        <ItemsContainer>
          <CheckoutHeader />
          {cartItems.map(({ id, ...cartItemProps }) => (
            <CheckoutItem key={id} item={{ ...cartItemProps, id }} />
          ))}
          <TestWarningContainer>
            <StripeTestWarningMessage />
          </TestWarningContainer>
          <SummaryContainer>
            <CheckoutSummary totalPrice={totalPrice} />
          </SummaryContainer>
        </ItemsContainer>
      ) : (
        <EmptyCheckout />
      )}
    </CheckoutPageContainer>
  );
};

Checkout.propTypes = {
  totalPrice: PropTypes.number,
  cartItems: PropTypes.arrayOf(PropTypes.shape(CartItemSchema)),
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemId) => dispatch(removeItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
