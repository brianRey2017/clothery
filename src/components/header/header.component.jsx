import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

import { auth } from "@lib/firebase";
import CartDropdown from "@components/cart-dropdown/cart-dropdown.component";
import CartIcon from "@components/cart-icon/cart-icon.component";
import { ReactComponent as LogoIcon } from "@images/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
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
      <CartDropdown />
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
