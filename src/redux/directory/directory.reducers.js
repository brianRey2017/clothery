import { DIRECTORY_ACTION_TYPES } from "./directory.types";
import { SECTIONS } from "@data/sections";

const INITIAL_STATE = { sections: SECTIONS };

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case DIRECTORY_ACTION_TYPES:
      return { ...state };
    default:
      return state;
  }
};
