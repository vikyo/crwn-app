import React from "react";
import { connect } from "react-redux";

import "./collectionPage.scss";
import CollectionItem from "../../components/collection-item/collection-item";
import { selectCollection } from "../../redux/shop/selector";

const CollectionPage = ({ collectionItem }) => {
  const { title, items } = collectionItem;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// selectCollection returns a selector function and then this selector takes in the state and give the result
// L136 section11
const mapStateToProps = (state, ownProps) => ({
  collectionItem: selectCollection(ownProps.match.params.collectionCategory)(
    state
  ),
});

export default connect(mapStateToProps)(CollectionPage);
