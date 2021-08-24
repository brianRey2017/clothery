export const TEST_CREDIT_CARD_NUMBER =
  process.env["REACT_APP_STRIPE_TEST_CREDIT_CARD_NUMBER"];

export const TEST_CREDIT_CARD_EXPIRING_DATE = `01/${(
  new Date().getFullYear() + 1
)
  .toString()
  .substr(-2)}`;

export const TEST_CREDIT_CARD_CVV =
  process.env["REACT_APP_STRIPE_TEST_CREDIT_CARD_CVV"];
