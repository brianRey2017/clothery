import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import React from "react";

import "./collection.styles.scss";
import { useRouteMatch } from "react-router-dom";

const Collection = () => {
  const match = useRouteMatch();
  const {
    params: { categoryId },
  } = match;
  console.log(categoryId);
  return (
    <div>
      <h1>Collection</h1>
    </div>
  );
};

Collection.propTypes = {};

const mapStateToProps = createStructuredSelector({
  // items: selectCollectionItems,
});

const mapDispatchToProps = (dispatch) => ({
  // items: se => dispatch(action(param)),
});

export default connect(mapStateToProps)(Collection);
