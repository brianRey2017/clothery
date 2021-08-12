import { SHOP_ACTION_TYPES } from "./shop.types";
import { SHOP_DATA } from "@data/shop";

const INITIAL_STATE = { collections: SHOP_DATA };

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SHOP_ACTION_TYPES:
      return { ...state };
    default:
      return state;
  }
};
