import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopCollectionsForPreview = createSelector(
  [selectShop],
  (shop) => Object.values(shop.collections)
);

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollection = memoize((collectionURLParam) =>
  createSelector([selectShopCollections], (collections) => {
    console.log(collectionURLParam);
    console.log(collections);
    return collections[collectionURLParam];
  })
);
