import { DIRECTORY_ACTION_TYPES } from "./directory.types";

const INITIAL_STATE = { sections: [] };

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DIRECTORY_ACTION_TYPES.UPDATE_SECTIONS:
      return { ...state, sections: payload };
    default:
      return state;
  }
};
