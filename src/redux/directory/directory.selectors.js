import memoize from "lodash.memoize";
import { createSelector } from "reselect";

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
