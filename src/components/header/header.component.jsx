import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

import { ReactComponent as Logo } from "@images/crown.svg";
import "./header.styles.scss";
import { auth } from "@lib/firebase";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
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
      </div>
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
};

export default Header;
