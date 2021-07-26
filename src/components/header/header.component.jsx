import { Link } from "react-router-dom";
import React from "react";

import { ReactComponent as Logo } from "@images/crown.svg";
import "./header.styles.scss";

const Header = () => (
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
      <Link className="option" to="">
        LOGIN
      </Link>
    </div>
  </div>
);

export default Header;
