import { firestore } from "@lib/firebase";

const USERS_COLLECTION_REF = firestore.collection("users");

const getUserDTO = ({ displayName, email }, additionalData) => ({
  createdAt: new Date(),
  displayName,
  email,
  ...additionalData,
});

const getUser = async (userId) => USERS_COLLECTION_REF.doc(userId).get();

const getUsers = async () => USERS_COLLECTION_REF.get();

const createUser = async (userAuth, additionalData) => {
  // ON SIGN OUT FIREBASE RETURNS NULL
  if (!userAuth) return;

  const { uid: userId } = userAuth;
  const userRef = USERS_COLLECTION_REF.doc(userId);

  if (!(await userExists(userId))) {
    try {
      const payload = getUserDTO(userAuth, additionalData);
      await userRef.set(payload);
      return userRef;
    } catch (error) {
      console.error("Error while creating user", error);
    }
  }
};

const userExists = async (userId) => {
  return getUser(userId).exists;
};

export default {
  createUser,
  getUser,
  getUsers,
  userExists,
};
