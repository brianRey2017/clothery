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

const MenuItem = ({ imagePreviewURL, linkUrl, title, large }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(linkUrl);
  };

  return (
    <MenuItemContainer
      className={`${large ? "large" : ""}`}
      onClick={() => handleClick()}
    >
      <ImageContainer
        style={{
          backgroundImage: `url(${imagePreviewURL})`,
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
  imagePreviewURL: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  large: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
