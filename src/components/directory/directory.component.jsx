import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import CollectionsService from "@services/collection";
import { DirectoryContainer } from "./directory.styles";
import MenuItem from "@components/menu-item/menu-item.component";
import { selectDirectorySections } from "@redux/directory/directory.selectors";
import { updateSections as triggerSectionsUpdate } from "@redux/directory/directory.actions";

const Directory = ({ sections, updateSections }) => {
  useEffect(async () => {
    updateSections(await CollectionsService.getFeaturedCollections());
  }, []);
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem
          key={id}
          id={id}
          {...sectionProps}
          linkUrl={encodeURI(`shop/${sectionProps.title}`)}
        />
      ))}
    </DirectoryContainer>
  );
};

Directory.propTypes = {
  sections: PropTypes.array,
  updateSections: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

const mapDispatchToProps = (dispatch) => ({
  updateSections: (sections) => dispatch(triggerSectionsUpdate(sections)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
