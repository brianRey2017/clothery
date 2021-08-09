import React from "react";

import CustomButton from "@components/common/custom-button/custom-button.component";
import { ReactComponent as CartIcon } from "@images/shopping-bag.svg";

import "./empty-checkout.styles.scss";
import { useHistory } from "react-router-dom";

export const EmptyCheckout = () => {
  const history = useHistory();
  return (
    <div className="empty-checkout">
      <div className="icon">
        <CartIcon />
      </div>
      <div className="empty-checkout-message">
        <h2 className="message">Your Cart Is Currently Empty!</h2>
        <span className="description">
          Before proceed to checkout you must add some products to your shopping cart!
        </span>
      </div>
      <CustomButton onClick={() => history.push("/shop")}>
        GO TO SHOP
      </CustomButton>
    </div>
  );
};
