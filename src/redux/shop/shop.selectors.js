import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => (collections ? Object.values(collections) : [])
);

export const selectShopCollection = memoize((collectionURLParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionURLParam] : null
  )
);
