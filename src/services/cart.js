import { firestore } from "@lib/firebase";

export class UsersService {
  async getCartItems(userId) {
    return firestore.collection(`users/${userId}/cartItems`);
  }
}
