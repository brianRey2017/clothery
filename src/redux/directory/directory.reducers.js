import { DIRECTORY_ACTION_TYPES } from "./directory.types";
  
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DIRECTORY_ACTION_TYPES:
      return { ...state };
    default:
      return state;
  }
};