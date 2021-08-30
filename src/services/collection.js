import { FirestoreCollection } from "./lib/firestore-collection";
import CollectionItemsService from "./collection-item";

const getCollectionDAO = async ({ title, items = [], id, name }) => ({
  title,
  items,
  id,
  routeName: encodeURI(name),
});

class CollectionsService extends FirestoreCollection {
  constructor() {
    super("collections");
  }

  async getCollection(collectionId) {
    return this.__getDocument__(collectionId);
  }

  async getCollections() {
    const collections = await this.__getCollection__({
      extract: true,
    });

    const collectionsWithItems = await Promise.all(
      collections.map(
        async (collection) => await this._mapCollectionWithItems(collection)
      )
    );

    return collectionsWithItems.reduce(
      (collectionsMap, item) => ({
        ...collectionsMap,
        [item.routeName]: item,
      }),
      {}
    );
  }

  async getFeaturedCollections() {
    // TO DO: check how to apply the library here
    const dataRef = await this.__getCollectionRef__()
      .where("featured", "==", true)
      .orderBy("large")
      .get();

    const extractedData = dataRef.docs.map((item) => item.data());

    return extractedData;
  }

  async _mapCollectionWithItems(collection) {
    const collectionItems =
      await CollectionItemsService.getCollectionItemsForSpecificCollection(
        collection.id
      );

    return getCollectionDAO({ ...collection, items: collectionItems });
  }
}

export default new CollectionsService();
