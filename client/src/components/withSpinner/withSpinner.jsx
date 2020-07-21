import React from "react";

import Spinner from "../spinner/spinner";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) =>
  isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;

// Same HOC function with different syntax

/* const WithSpinner = (WrappedComponent) => {
  return (props) => {
    {
      return props.isLoading ? (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      ) : (
        <WrappedComponent {...props} />
      );
    }
  };
}; */

export default WithSpinner;
