import { firestore } from "@lib/firebase";

export class UsersService {
  async getUsers() {
    return firestore.collection("users");
  }
}
