import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";

import CartItemPreview from "@components/cart/cart-item-preview/cart-item-preview.component";
import {
  CartDropdownContainer,
  CartItemsContainer,
  StyledCustomButton,
} from "./cart-dropdown.styles";
import { clearCart, toggleCartVisibility } from "@redux/cart/cart.actions";
import { selectCartItems } from "@redux/cart/cart.selectors";

const CartDropdown = ({ cartItems, clearCart, toggleCartVisibility }) => {
  const history = useHistory();

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItemPreview key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your car is empty</span>
        )}
      </CartItemsContainer>
      {cartItems.length > 0 && (
        <div className="buttons">
          <StyledCustomButton variant="danger" onClick={() => clearCart()}>
            CLEAR CART
          </StyledCustomButton>
          <StyledCustomButton
            onClick={() => {
              history.push("/checkout");
              toggleCartVisibility();
            }}
          >
            GO TO CHECKOUT
          </StyledCustomButton>
        </div>
      )}
    </CartDropdownContainer>
  );
};

CartDropdown.propTypes = {
  clearCart: PropTypes.func,
  toggleCartVisibility: PropTypes.func,
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
