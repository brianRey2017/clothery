import { FirestoreCollection } from "./lib/firestore-collection";

const getUserDTO = ({ displayName, email }, additionalData) => ({
  createdAt: new Date(),
  displayName,
  email,
  ...additionalData,
});

class UsersService extends FirestoreCollection {
  constructor() {
    super("users");
  }

  async getUser(userId) {
    return this.getDocument(userId);
  }
  async getUsers() {
    return this.getDocuments();
  }

  async createUser(userAuth, additionalData) {
    if (!userAuth) return;

    const { uid: userId } = userAuth;
    const userRef = this.getDocumentRef(userId);

    if (!(await this.userExists(userId))) {
      try {
        const payload = getUserDTO(userAuth, additionalData);
        await this.createDocumentWithId(userId, payload);
        return userRef;
      } catch (error) {
        console.error("Error while creating user", error);
      }
    }
  }

  async userExists(userId) {
    return this.documentExists(userId);
  }
}

export default new UsersService();
