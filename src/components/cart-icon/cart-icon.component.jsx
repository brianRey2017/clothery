import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import { ReactComponent as ShoppingIcon } from "@images/shopping-bag.svg";
import { toggleCartShow } from "@redux/cart/cart.actions";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartShow }) => {
  return (
    <div className="cart-icon" onClick={toggleCartShow}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"></span>
    </div>
  );
};

CartIcon.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  toggleCartShow: () => dispatch(toggleCartShow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
