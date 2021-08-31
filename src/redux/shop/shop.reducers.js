import { SHOP_ACTION_TYPES } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: "",
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: payload, isFetching: false };
    case SHOP_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: payload };
    default:
      return state;
  }
};
