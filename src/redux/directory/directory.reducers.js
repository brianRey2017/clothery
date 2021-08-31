import { DIRECTORY_ACTION_TYPES } from "./directory.types";

const INITIAL_STATE = { sections: null, isFetching: false, errorMessage: "" };

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DIRECTORY_ACTION_TYPES.FETCH_SECTIONS_START:
      return { ...state, isFetching: true };
    case DIRECTORY_ACTION_TYPES.FETCH_SECTIONS_SUCCESS:
      return { ...state, sections: payload, isFetching: false };
    case DIRECTORY_ACTION_TYPES.FETCH_SECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: payload };
    default:
      return state;
  }
};
