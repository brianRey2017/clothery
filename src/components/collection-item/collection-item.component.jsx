import React from "react";
import PropTypes from "prop-types";
import "./collection-item.styles.scss";
import CustomButton from "@components/common/custom-button/custom-button.component";

const CollectionItem = ({ id, imageUrl, name, price }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton>ADD TO CART</CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CollectionItem;
