import { addItemToCart, removeItemFromCart } from "./cart.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  show: false,
  items: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_SHOW:
      return { ...state, show: !state.show };
    case CART_ACTION_TYPES.ADD_ITEM:
      return { ...state, items: addItemToCart(state.items, payload) };
    case CART_ACTION_TYPES.REMOVE_ITEM:
      return { ...state, items: removeItemFromCart(state.items, payload) };
    case CART_ACTION_TYPES.REMOVE_ALL_ITEMS:
      return { ...state, items: {} };
    default:
      return state;
  }
};
