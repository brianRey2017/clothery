import { COLLECTION_ACTION_TYPES } from "./collection.types";
  
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case COLLECTION_ACTION_TYPES:
      return { ...state };
    default:
      return state;
  }
};