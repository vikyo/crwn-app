import React, { Component } from "react";

import { SHOP_DATA } from "../../mock-data/shopData";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends Component {
  state = {
    collections: [...SHOP_DATA],
  };

  render() {
    return (
      <div>
        <h1>Collections</h1>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
