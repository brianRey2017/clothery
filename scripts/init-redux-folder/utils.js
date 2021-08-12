const fs = require("fs").promises;

const folderExists = async (path) => {
  const isErrorNotFound = (err) => err.code === "ENOENT";

  const result = await fs.stat(path).catch((err) => {
    if (isErrorNotFound(err)) {
      return false;
    }
    throw err;
  });
  return !result ? result : result.isDirectory();
};

const createFolder = async (path) => await fs.mkdir(path);

const createFile = async (path, fileContent) =>
  await fs.writeFile(path, fileContent);

const createFiles = async (files) =>
  Promise.all(
    files.map(([filePath, fileContent]) => {
      createFile(filePath, fileContent);
    })
  );

const toTitleCase = (word) => word.charAt(0).toUpperCase() + word.slice(1);

module.exports = {
  createFile,
  createFiles,
  createFolder,
  folderExists,
  toTitleCase,
};
