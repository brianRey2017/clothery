import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import React from "react";

import MenuItem from "@components/menu-item/menu-item.component";
import { selectDirectorySections } from "@redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = ({ directory }) => {
  return (
    <div className="directory-menu">
      {directory.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} id={id} {...sectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
