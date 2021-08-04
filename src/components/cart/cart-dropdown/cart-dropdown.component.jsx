import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import CartItemPreview from "@components/cart/cart-item-preview/cart-item-preview.component";
import { clearCart } from "@redux/cart/cart.actions";
import CustomButton from "@components/common/custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, clearCart }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItemPreview
            key={item.id}
            className="cart-item-preview"
            item={item}
          />
        ))}
      </div>
      <div className="buttons">
        {cartItems.length > 0 && (
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
  cartItems: PropTypes.array,
};

const mapStateToProps = ({ cart }) => ({
  cartItems: Object.values(cart.items),
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: (item) => dispatch(clearCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
