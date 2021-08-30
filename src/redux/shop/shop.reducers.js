import { SHOP_ACTION_TYPES } from "./shop.types";

const INITIAL_STATE = { collections: [] };

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SHOP_ACTION_TYPES.UPDATE_COLLECTIONS:
      return { ...state, collections: payload };
    default:
      return state;
  }
};
