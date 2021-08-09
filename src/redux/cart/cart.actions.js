import { CART_ACTION_TYPES } from "./cart.types";

export const toggleCartVisibility = () => ({
  type: CART_ACTION_TYPES.TOGGLE_CART_SHOW,
});

export const addItem = (item) => ({
  type: CART_ACTION_TYPES.ADD_ITEM,
  payload: item,
});

export const removeItem = (itemId) => ({
  type: CART_ACTION_TYPES.REMOVE_ITEM,
  payload: itemId,
});

export const reduceItemQuantity = (itemId) => ({
  type: CART_ACTION_TYPES.REDUCE_ITEM_QUANTITY,
  payload: itemId,
});

export const clearCart = () => ({
  type: CART_ACTION_TYPES.REMOVE_ALL_ITEMS,
});
