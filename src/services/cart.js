import { firestore } from "@lib/firebase";

export class CartService {
  async getCartItems(userId) {
    const carItems = await firestore.collection(`users/${userId}/cartItems`);

    return carItems || [];
  }
}
