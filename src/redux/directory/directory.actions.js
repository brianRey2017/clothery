import { DIRECTORY_ACTION_TYPES } from "./directory.types";

export const updateSections = (sections) => ({
  type: DIRECTORY_ACTION_TYPES.UPDATE_SECTIONS,
  payload: sections,
});
