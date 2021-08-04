const { firestore, auth: firebaseAuth } = require("../firebase");
const { GENERATE_USERS_DATA } = require("../data/users");
const { spinner } = require("../utils");

const USERS_REF = firestore.collection("users");

const createUser = async ({ email, id, ...userData }) => {
  console.log("SIGNIN UP USER", email);
  spinner.start();
  await firebaseAuth.createUserWithEmailAndPassword(email, "test1234");
  spinner.stop();
  const USER_REF = USERS_REF.doc(id);
  console.log("\nCREATING USER IN DB");
  spinner.start();
  await USER_REF.set({ email, ...userData });
  spinner.stop();
};

exports.createUsers = async () => {
  console.log("CREATING USERS with default password test1234");
  try {
    for (const USER of GENERATE_USERS_DATA(1)) {
      await createUser(USER);
    }
    console.log("\nALL USERS CREATED");
  } catch (error) {
    console.error("Error while creating users", error);
  }
};
