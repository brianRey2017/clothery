const { createAll } = require("./services/index");

const main = async () => {
  await createAll();
};

main()
  .then(() => {
    console.log(`DATA SUCCESSFULLY CREATED.`);
    process.exit();
  })
  .catch((err) => {
    console.error(err);
  });
