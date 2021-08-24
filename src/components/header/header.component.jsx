import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { createStructuredSelector } from "reselect";

import { auth } from "@lib/firebase";
import CartDropdown from "@components/cart/cart-dropdown/cart-dropdown.component";
import CartIcon from "@components/cart/cart-icon/cart-icon.component";
import { ReactComponent as LogoIcon } from "@images/crown.svg";
import { selectCartVisibility } from "@redux/cart/cart.selectors";
import { selectCurrentUser } from "@redux/user/user.selectors";

import "./header.styles.scss";

const Header = ({ showCart, currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <LogoIcon className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {showCart && <CartDropdown />}
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showCart: selectCartVisibility,
});

export default connect(mapStateToProps)(Header);
