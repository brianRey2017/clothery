import memoize from "lodash.memoize";
import { createSelector } from "reselect";

// HOW TO REFACTOR THIS TO SOMETHING BETTER
const sortBySectionSize = memoize((sections) =>
  sections
    .sort((sectionA, sectionB) => sectionA.large && sectionB.large)
    .reverse()
);

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => sortBySectionSize(directory.sections)
);

export const selectIsFetchingSections = createSelector(
  [selectDirectory],
  (directory) => directory.isFetching
);
