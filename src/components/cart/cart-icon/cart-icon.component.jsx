import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import React from "react";

import {
  CartBasketIcon,
  ItemCount,
  CartIconContainer,
} from "./cart-icon.styles";
import { selectCartItemsCount } from "@redux/cart/cart.selectors";
import { toggleCartVisibility } from "@redux/cart/cart.actions";

const CartIcon = ({ itemCount, toggleCartVisibility }) => {
  return (
    <CartIconContainer onClick={toggleCartVisibility}>
      <CartBasketIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

CartIcon.propTypes = {
  itemCount: PropTypes.number,
  toggleCartVisibility: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
