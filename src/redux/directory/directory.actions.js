import CollectionsService from "@services/collection";
import { DIRECTORY_ACTION_TYPES } from "./directory.types";

export const updateSections = (sections) => ({
  type: DIRECTORY_ACTION_TYPES.UPDATE_SECTIONS,
  payload: sections,
});

const triggerFetchSectionsStart = () => ({
  type: DIRECTORY_ACTION_TYPES.FETCH_SECTIONS_START,
});

const triggerFetchSectionsSuccess = (collections) => ({
  payload: collections,
  type: DIRECTORY_ACTION_TYPES.FETCH_SECTIONS_SUCCESS,
});

const triggerFetchSectionsFailure = (errorMessage) => ({
  payload: errorMessage,
  type: DIRECTORY_ACTION_TYPES.FETCH_SECTIONS_SUCCESS,
});

export const triggerFetchSectionsAsync = () => {
  return async (dispatch) => {
    dispatch(triggerFetchSectionsStart());
    try {
      const collections = await CollectionsService.getFeaturedCollections();
      dispatch(triggerFetchSectionsSuccess(collections));
    } catch (error) {
      dispatch(triggerFetchSectionsFailure(error));
    }
  };
};
