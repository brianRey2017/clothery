import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  show: false,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_SHOW:
      return { ...state, show: !state.show };
    default:
      return state;
  }
};
