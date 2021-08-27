import { SHOP_ACTION_TYPES } from "./shop.types";

export const updateCollections = (collections) => ({
  type: SHOP_ACTION_TYPES.UPDATE_COLLECTIONS,
  payload: collections,
});
