import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import { clearCart } from "@redux/cart/cart.actions";
import CustomButton from "@components/common/custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, clearCart, isCartEmpty }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <div className="buttons">
        {!isCartEmpty && (
          <CustomButton variant="danger" onClick={() => clearCart()}>
            CLEAR CART
          </CustomButton>
        )}
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

CartDropdown.propTypes = {
  clearCart: PropTypes.func,
  cartItems: PropTypes.arrayOf([PropTypes.object]),
  isCartEmpty: PropTypes.bool,
};

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.items,
  isCartEmpty: cart.items.length === 0,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(clearCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
