const { createUsers } = require("./users");
const { createCollectionAndItems } = require("./collections-and-items");

const createAll = async () => {
  await createUsers();
  await createCollectionAndItems();
};

module.exports = {
  createAll,
};
