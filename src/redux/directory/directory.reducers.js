import { DIRECTORY_ACTION_TYPES } from "./directory.types";

const INITIAL_STATE = { sections: [] };

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case DIRECTORY_ACTION_TYPES:
      return { ...state };
    default:
      return state;
  }
};
