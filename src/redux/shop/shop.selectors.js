import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const COLLECTIONS_ID_MAP = {
  hats: "d5d711da-f7a4-4c0e-b337-f083b2e9544f",
  sneakers: "ddcab44f-3e9d-4d0f-ad3e-3e52a5992213",
  jackets: "596e26cb-9f23-4636-a2f6-673c11bc0ff0",
  womens: "aae8bc95-f0e5-4622-884b-72cdaf8ae90e",
  mens: "7f55775c-dd3f-4d02-84fb-2bae12cd0c17",
};

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectShopCollection = memoize((collectionURLParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTIONS_ID_MAP[collectionURLParam]
    )
  ));
