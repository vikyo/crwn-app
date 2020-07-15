import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import { selectCollectionItems } from "../../redux/shop/selector";
import "./shopPage.scss";
import CollectionPage from "../collection/collectionPage";

const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        path={`${match.path}/:collectionCategory`}
        component={CollectionPage}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collectionItems: selectCollectionItems,
});

export default connect(mapStateToProps)(ShopPage);
