import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./withSpinner-styles";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) =>
  isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );

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
