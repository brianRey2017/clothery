import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import React from "react";

import CartItemPreview from "@components/cart/cart-item-preview/cart-item-preview.component";
import { clearCart, toggleCartVisibility } from "@redux/cart/cart.actions";
import CustomButton from "@components/common/custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { selectCartItems } from "@redux/cart/cart.selectors";
import { useHistory } from "react-router-dom";

const CartDropdown = ({ cartItems, clearCart, toggleCartVisibility }) => {
  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItemPreview
              key={item.id}
              className="cart-item-preview"
              item={item}
            />
          ))
        ) : (
          <span className="empty-message">Your car is empty</span>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="buttons">
          <CustomButton variant="danger" onClick={() => clearCart()}>
            CLEAR CART
          </CustomButton>
          <CustomButton
            onClick={() => {
              history.push("/checkout");
              toggleCartVisibility();
            }}
          >
            GO TO CHECKOUT
          </CustomButton>
        </div>
      )}
    </div>
  );
};

CartDropdown.propTypes = {
  clearCart: PropTypes.func,
  cartItems: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: (item) => dispatch(clearCart(item)),
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
