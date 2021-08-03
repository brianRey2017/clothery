const { createFiles, createFolder, folderExists } = require("./utils");
const { generateConstants } = require("./constants");

const [, , folderName] = process.argv;
const { FILES, FOLDER_PATH } = generateConstants(folderName);

const main = async () => {
  try {
    const directoryExists = await folderExists(FOLDER_PATH);
    if (!directoryExists) {
      await createFolder(FOLDER_PATH);
    }
    await createFiles(FILES);
  } catch (err) {
    console.error(err);
  }
};

main()
  .then(() => {
    console.log(`FILES SUCCESSFULLY CREATED AT: ${FOLDER_PATH}.\nREMEMBER TO ADD THE REDUCERS TO THE ROOT REDUCER!`);
  })
  .catch((err) => {
    console.error(err);
  });
