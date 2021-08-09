import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import React from "react";

import { selectCartItemsCount } from "@redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "@images/shopping-bag.svg";
import { toggleCartVisibility } from "@redux/cart/cart.actions";
import "./cart-icon.styles.scss";

const CartIcon = ({ itemCount, toggleCartVisibility }) => {
  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
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
