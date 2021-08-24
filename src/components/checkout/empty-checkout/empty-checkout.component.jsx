import React from "react";

import CustomButton from "@components/common/custom-button/custom-button.component";
import { ReactComponent as CartIcon } from "@images/shopping-bag.svg";

import "./empty-checkout.styles.scss";
import { useHistory } from "react-router-dom";
import {
  ButtonContainer,
  CartIconContainer,
  EmptyCheckoutContainer,
  EmptyCheckoutMessageContainer,
  EmptyCheckoutMessageDescription,
  EmptyCheckoutMessageTitle,
} from "./empty-checkout.styles";

export const EmptyCheckout = () => {
  const history = useHistory();
  return (
    <EmptyCheckoutContainer>
      <CartIconContainer>
        <CartIcon />
      </CartIconContainer>
      <EmptyCheckoutMessageContainer>
        <EmptyCheckoutMessageTitle>
          Your Cart Is Currently Empty!
        </EmptyCheckoutMessageTitle>
        <EmptyCheckoutMessageDescription>
          Before proceed to checkout you must add some products to your shopping
          cart!
        </EmptyCheckoutMessageDescription>
      </EmptyCheckoutMessageContainer>
      <ButtonContainer>
        <CustomButton onClick={() => history.push("/shop")}>
          GO TO SHOP
        </CustomButton>
      </ButtonContainer>
    </EmptyCheckoutContainer>
  );
};
