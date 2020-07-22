import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/action";
import WithSpinner from "../../components/withSpinner/withSpinner";
import Spinner from "../../components/spinner/spinner";

const CollectionPageWithSpinnerContainer = lazy(() =>
  import("../collection/HOC-container")
);
const CollectionsOverviewWithSpinnerContainer = lazy(() =>
  import("../../components/collections-overview/HOC-container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]); // Can pass the empty [] also

  return (
    <>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default WithSpinner(connect(null, mapDispatchToProps)(ShopPage));
