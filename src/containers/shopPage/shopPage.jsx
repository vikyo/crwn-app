import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collectionPage";
import { fetchCollectionsStartAsync } from "../../redux/shop/action";
import WithSpinner from "../../components/withSpinner/withSpinner";
import {
  selectCollectionsisFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/selector";
import { createStructuredSelector } from "reselect";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // Fetching the shop collection data
  componentDidMount() {
    this.props.fecthCollections();
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    // console.log(CollectionsOverviewWithSpinner);
    // console.log(isCollectionFetching);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionCategory`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionsisFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fecthCollections: () => dispatch(fetchCollectionsStartAsync()),
});

export default WithSpinner(
  connect(mapStateToProps, mapDispatchToProps)(ShopPage)
);
