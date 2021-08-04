import { CART_ACTION_TYPES } from "./cart.types";

export const toggleCartShow = () => ({
  type: CART_ACTION_TYPES.TOGGLE_CART_SHOW,
});

export const addItem = (item) => ({
  type: CART_ACTION_TYPES.ADD_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CART_ACTION_TYPES.REMOVE_ALL_ITEMS,
});
