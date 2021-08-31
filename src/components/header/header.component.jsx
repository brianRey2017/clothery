import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { createStructuredSelector } from "reselect";

import { auth } from "@lib/firebase";
import CartDropdown from "@components/cart/cart-dropdown/cart-dropdown.component";
import CartIcon from "@components/cart/cart-icon/cart-icon.component";
import {
  HeaderContainer,
  Option,
  OptionsContainer,
  OptionWithoutLink,
} from "./header.styles";
import { ReactComponent as LogoIcon } from "@images/crown.svg";
import { selectCartVisibility } from "@redux/cart/cart.selectors";
import { selectCurrentUser } from "@redux/user/user.selectors";

const Header = ({ showCart, currentUser }) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoIcon />
      </Link>
      <OptionsContainer>
        <Option to="/shop">SHOP</Option>
        {/* <Option to="">CONTACT</Option> */}
        {currentUser ? (
          <OptionWithoutLink onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionWithoutLink>
        ) : (
          <Option to="/signin">SIGN IN</Option>
        )}
        <CartIcon />
      </OptionsContainer>
      {showCart && <CartDropdown />}
    </HeaderContainer>
  );
};

Header.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  showCart: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showCart: selectCartVisibility,
});

export default connect(mapStateToProps)(Header);
