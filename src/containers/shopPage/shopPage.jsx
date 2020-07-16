import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collectionPage";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/action";
import WithSpinner from "../../components/withSpinner/withSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = { loading: true };
  unSubscribeFromSnapsot = null;
  // Fetching the shop data
  componentDidMount() {
    const { updateCollectionsFunction } = this.props;
    const collectionRef = firestore.collection("collections");

    // Using firebase REST api calls and fetch
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db-ad650/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
      updateCollectionsFunction(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    // console.log(CollectionsOverviewWithSpinner);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionCategory`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollectionsFunction: (collectionsObject) =>
    dispatch(updateCollections(collectionsObject)),
});

export default WithSpinner(connect(null, mapDispatchToProps)(ShopPage));
