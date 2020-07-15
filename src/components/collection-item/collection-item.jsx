import React from "react";
import { connect } from "react-redux";

import "./collection-item.scss";
import CustomButton from "../custom-button/custom-button";
import { addItem } from "../../redux/cart/action";

const CollectionItem = ({ item, addItemFunction }) => {
  // console.log(item);
  const { imageUrl, name, price } = item; // Destructuring the props
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
      <CustomButton
        className="custom-button"
        type="button"
        inverted
        onClick={() => addItemFunction(item)}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispacthToProps = (dispatch) => ({
  addItemFunction: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispacthToProps)(CollectionItem);
