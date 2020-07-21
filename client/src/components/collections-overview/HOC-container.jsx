import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import WithSpinner from "../withSpinner/withSpinner";
import CollectionsOverview from "./collections-overview";
import { selectIsCollectionsFetching } from "../../redux/shop/selector";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

// compose: used for simplifying code, evaluated from right to left
const CollectionOverviewWithSpinnerContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionOverviewWithSpinnerContainer;
