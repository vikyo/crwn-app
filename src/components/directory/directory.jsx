import React from "react";

import "./directory.scss";
import { sections } from "../../mock-data/directoryData";
import MenuItem from "../menu-item/menu-item";

class Directory extends React.Component {
  state = {
    shopItems: [...sections],
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.shopItems.map(({ id, ...otherSectionProps }) => (
          // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          //L70: as the key and props passed have same name we can use this syntax
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;
