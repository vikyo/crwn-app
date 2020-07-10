import React, { memo } from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.scss";

const MenuItem = memo(function MenuItem({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
}) {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(linkUrl)}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      ></div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
});

export default withRouter(MenuItem);
