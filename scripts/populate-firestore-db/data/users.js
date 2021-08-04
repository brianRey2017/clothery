const faker = require("faker");

exports.GENERATE_USERS_DATA = (n) =>
  [...Array(n).keys()].map(() => ({
    cretedAt: new Date(),
    displayName: faker.name.firstName(),
    role: true,
    email: faker.internet.exampleEmail(),
    id: faker.datatype.uuid(),
  }));
