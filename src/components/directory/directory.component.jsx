import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { DirectoryContainer } from "./directory.styles";
import MenuItem from "@components/menu-item/menu-item.component";
import {
  selectDirectorySections,
  selectIsFetchingSections,
} from "@redux/directory/directory.selectors";
import { triggerFetchSectionsAsync } from "@redux/directory/directory.actions";
import WithSpinner from "@components/common/with-spinner/with-spinner.component";

const Directory = ({ fetchSessions, loading, sections }) => {
  useEffect(() => fetchSessions(), []);

  const DirectoryContainerWithSpinner = WithSpinner(DirectoryContainer);
  return (
    <DirectoryContainerWithSpinner isLoading={loading}>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem
          key={id}
          id={id}
          {...sectionProps}
          linkUrl={encodeURI(`shop/${sectionProps.name}`)}
        />
      ))}
    </DirectoryContainerWithSpinner>
  );
};

Directory.propTypes = {
  sections: PropTypes.array,
  fetchSessions: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  loading: selectIsFetchingSections,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSessions: () => dispatch(triggerFetchSectionsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
