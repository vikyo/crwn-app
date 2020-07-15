import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collections-overview.scss";
import { selectCollectionItems } from "../../redux/shop/selector";
import CollectionPreview from "../collection-preview/collection-preview";

const CollectionOverview = ({ collectionItems }) => {
  return (
    <div className="collection-overview">
      {collectionItems.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collectionItems: selectCollectionItems,
});

export default connect(mapStateToProps)(CollectionOverview);
