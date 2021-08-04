import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  show: false,
  items: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_SHOW:
      return { ...state, show: !state.show };
    case CART_ACTION_TYPES.ADD_ITEM:
      return { ...state, items: [...state.items, payload] };
    default:
      return state;
  }
};
