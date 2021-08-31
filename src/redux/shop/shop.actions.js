import { SHOP_ACTION_TYPES } from "./shop.types";
import CollectionsService from "@services/collection";

const fetchCollectionsStart = () => ({
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = (collections) => ({
  payload: collections,
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
});

const fetchCollectionsFailure = (errorMessage) => ({
  payload: errorMessage,
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
});

export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCollectionsStart());
    try {
      const collections = await CollectionsService.getCollections({
        getItems: true,
      });
      dispatch(fetchCollectionsSuccess(collections));
    } catch (error) {
      dispatch(fetchCollectionsFailure(error));
    }
  };
};
