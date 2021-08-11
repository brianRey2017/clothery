const { toTitleCase } = require("./utils");

exports.generateConstants = (folderName) => {
  const FOLDER_PATH = `src/redux/${folderName}`;
  const TYPES_ENUM = `${folderName.toUpperCase()}_ACTION_TYPES`;
  const IMPORT_TYPES_ENUM = `import { ${TYPES_ENUM} } from "./${folderName}.types";`;
  const TYPES_FILE_CONTENT = `export const ${TYPES_ENUM} = {};`;

  const REDUCERS_FILE_CONTENT = `${IMPORT_TYPES_ENUM}
  
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ${TYPES_ENUM}:
      return { ...state };
    default:
      return state;
  }
};`;

  const ACTIONS_FILE_CONTENT = `${IMPORT_TYPES_ENUM}`;
  const SELECTORS_FILE_CONTENT = `import { createSelector } from "reselect";

  const select${toTitleCase(folderName)} = (state) => state.${folderName};
  `

  const FILES = [
    [`${FOLDER_PATH}/${folderName}.actions.js`, ACTIONS_FILE_CONTENT],
    [`${FOLDER_PATH}/${folderName}.reducers.js`, REDUCERS_FILE_CONTENT],
    [`${FOLDER_PATH}/${folderName}.selectors.js`, SELECTORS_FILE_CONTENT],
    [`${FOLDER_PATH}/${folderName}.types.js`, TYPES_FILE_CONTENT],
  ];

  return {
    FILES,
    FOLDER_PATH,
  };
};
