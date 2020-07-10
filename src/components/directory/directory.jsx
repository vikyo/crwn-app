import React from "react";

import { sections } from "../../mock-data/data";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";

class Directory extends React.Component {
  state = {
    shopItems: [...sections],
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.shopItems.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
export default Directory;
