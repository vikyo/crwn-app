import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./directory.scss";
// import { sections } from "../../mock-data/directoryData";
import MenuItem from "../menu-item/menu-item";
import { selectDirectorySections } from "../../redux/directory/selector";

const Directory = ({ directorySections }) => {
  return (
    <div className="directory-menu">
      {directorySections.map(({ id, ...otherSectionProps }) => (
        // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        //L70: as the key and props passed have same name we can use this syntax
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  directorySections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
