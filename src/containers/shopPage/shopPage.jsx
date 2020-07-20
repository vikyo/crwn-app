import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionPageWithSpinnerContainer from "../collection/HOC-container";
import CollectionsOverviewWithSpinnerContainer from "../../components/collections-overview/HOC-container";
import { fetchCollectionsStart } from "../../redux/shop/action";
import WithSpinner from "../../components/withSpinner/withSpinner";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]); // Can pass the empty [] also

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewWithSpinnerContainer}
      />

      <Route
        exact
        path={`${match.path}/:collectionCategory`}
        component={CollectionPageWithSpinnerContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default WithSpinner(connect(null, mapDispatchToProps)(ShopPage));
