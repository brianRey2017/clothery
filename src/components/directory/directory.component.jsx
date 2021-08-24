import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import React from "react";

import { DirectoryContainer } from "./directory.styles";
import MenuItem from "@components/menu-item/menu-item.component";
import { selectDirectorySections } from "@redux/directory/directory.selectors";

const Directory = ({ directory }) => {
  return (
    <DirectoryContainer>
      {directory.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} id={id} {...sectionProps} />
      ))}
    </DirectoryContainer>
  );
};

Directory.propTypes = {
  directory: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
