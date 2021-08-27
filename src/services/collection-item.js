import { FirestoreCollection } from "./lib/firestore-collection";
class CollectionItemsService extends FirestoreCollection {
  constructor() {
    super("collection-items");
  }

  async getCollectionItem(collectionItemId) {
    return this.__getDocument__(collectionItemId);
  }

  async getCollectionItems() {
    const collections = await this.__getCollection__({ extract: true });
    return collections;
  }

  async getCollectionItemsForSpecificCollection(collectionId) {
    const collections = await this.__queryCollection__(
      ["collectionId", "==", collectionId],
      { extract: true }
    );
    return collections;
  }
}

export default new CollectionItemsService();
