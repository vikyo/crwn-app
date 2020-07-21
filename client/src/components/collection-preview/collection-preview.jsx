import React from "react";
import { withRouter } from "react-router-dom";

import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./collection-preview-style.jsx";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items, routeName, history, match }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.url}/${routeName}`)}>
        {title}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((_, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
