import React from "react";

import { StripeTestWarningMessageContainer } from "./test-warning-message.styles";
import {
  TEST_CREDIT_CARD_CVV,
  TEST_CREDIT_CARD_EXPIRING_DATE,
  TEST_CREDIT_CARD_NUMBER,
} from "./test-warning-message.utils";

export const StripeTestWarningMessage = () => {
  return (
    <StripeTestWarningMessageContainer>
      <b>Please use the following test credit card for payments</b>
      <br />
      Number: {TEST_CREDIT_CARD_NUMBER} - Exp: {TEST_CREDIT_CARD_EXPIRING_DATE}{" "}
      - CVV: {TEST_CREDIT_CARD_CVV}
    </StripeTestWarningMessageContainer>
  );
};
