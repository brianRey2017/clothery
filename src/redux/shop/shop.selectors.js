import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => {
  console.log(shop);
  return shop.collections
})