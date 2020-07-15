import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import "./shopPage.scss";
import CollectionPage from "../collection/collectionPage";

const ShopPage = ({ match }) => {
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

export default ShopPage;
