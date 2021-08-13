import CustomButton from "@components/common/custom-button/custom-button.component";
import PropTypes from "prop-types";
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ReactComponent as CreditCardIcon } from "@images/credit-card.svg";

const STRIPE_PUBLISHABLE_API_KEY =
  process.env["REACT_APP_STRIPE_PUBLISHABLE_API_KEY"];

export const StripeButton = ({ price }) => {
  const priceToCents = (price) => price * 100;

  const onToken = () => {
    console.log("====================================");
    console.log("PAYMENT SUCCESSFUL!");
    console.log("====================================");
  };
  return (
    <StripeCheckout
      amount={priceToCents(price)}
      description={`Your total is $${price}`}
      image="https://image.flaticon.com/icons/png/128/726/726488.png"
      label={`Pay now $${price}`}
      name="Clothery CO"
      panelLabel="Pay now"
      stripeKey={STRIPE_PUBLISHABLE_API_KEY}
      token={onToken}
    >
      <CustomButton variant="primary" Icon={CreditCardIcon} rounded>
        PAY ${price}
      </CustomButton>
    </StripeCheckout>
  );
};

StripeButton.propTypes = {
  price: PropTypes.number.isRequired,
};
