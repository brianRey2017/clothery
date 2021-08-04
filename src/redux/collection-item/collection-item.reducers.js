import { COLLECTION_ITEM_ACTION_TYPES } from "./collection-item.types";
  
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case COLLECTION-ITEM_ACTION_TYPES:
      return { ...state };
    default:
      return state;
  }
};