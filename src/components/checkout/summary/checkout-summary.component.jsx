import React from "react";
import PropTypes from "prop-types";
import { CheckoutSummaryContainer } from "./checkout-summary.styles";
import { StripeButton } from "../stripe-button/stripe-button.component";

const CheckoutSummary = ({ totalPrice }) => {
  return (
    <CheckoutSummaryContainer>
      <span>TOTAL: ${totalPrice}</span>
      <StripeButton price={totalPrice} />
    </CheckoutSummaryContainer>
  );
};

CheckoutSummary.propTypes = {
  totalPrice: PropTypes.number,
};

export default CheckoutSummary;
