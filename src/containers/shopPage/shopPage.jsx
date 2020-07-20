import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionPageWithSpinnerContainer from "../collection/HOC-container";
import CollectionsOverviewWithSpinnerContainer from "../../components/collections-overview/HOC-container";
import { fetchCollectionsStart } from "../../redux/shop/action";
import WithSpinner from "../../components/withSpinner/withSpinner";

class ShopPage extends React.Component {
  // Fetching the shop collection data
  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

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
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default WithSpinner(connect(null, mapDispatchToProps)(ShopPage));
