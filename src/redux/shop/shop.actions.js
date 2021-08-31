import { SHOP_ACTION_TYPES } from "./shop.types";
import CollectionsService from "@services/collection";

const triggerFetchCollectionsStart = () => ({
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START,
});

const triggerFetchCollectionsSuccess = (collections) => ({
  payload: collections,
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
});

const triggerFetchCollectionsFailure = (errorMessage) => ({
  payload: errorMessage,
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
});

export const triggerFetchCollectionsAsync = () => {
  return async (dispatch) => {
    dispatch(triggerFetchCollectionsStart());
    try {
      const collections = await CollectionsService.getCollections({
        getItems: true,
      });
      dispatch(triggerFetchCollectionsSuccess(collections));
    } catch (error) {
      dispatch(triggerFetchCollectionsFailure(error));
    }
  };
};
