import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import WithSpinner from "../../components/withSpinner/withSpinner";
import CollectionPage from "./collectionPage";
import { selectIsCollectionsLoaded } from "../../redux/shop/selector";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

// compose: used for simplifying code, evaluated from right to left
const CollectionPageWithSpinnerContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageWithSpinnerContainer;
