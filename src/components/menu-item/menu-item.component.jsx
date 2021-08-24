import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";

import {
  ImageContainer,
  MenuItemContainer,
  MenuItemContent,
  MenuItemSubitle,
  MenuItemTitle,
} from "./menu-item.styles";

const MenuItem = ({ imageUrl, linkUrl, title, size }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(linkUrl);
  };

  return (
    <MenuItemContainer
      className={`menu-item ${size}`}
      onClick={() => handleClick()}
    >
      <ImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <MenuItemContent>
        <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
        <MenuItemSubitle>SHOP NOW</MenuItemSubitle>
      </MenuItemContent>
    </MenuItemContainer>
  );
};

MenuItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
  title: PropTypes.string.isRequired,
};

export default MenuItem;
