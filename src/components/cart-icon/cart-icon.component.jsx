import PropTypes from "prop-types";
import React from "react";

import { ReactComponent as ShoppingIcon } from "@images/shoping-bag.svg";

const CartIcon = (props) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"></span>
    </div>
  );
};

CartIcon.propTypes = {};

export default CartIcon;
