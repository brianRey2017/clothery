import { firestore } from "@lib/firebase";

const COLLECTION_REF = firestore.collection("collection-items");

const getCollectionItem = async (collectionItemId) =>
  COLLECTION_REF.doc(collectionItemId).get();

const getCollectionItems = async () => COLLECTION_REF.get();

export default {
  getCollectionItem,
  getCollectionItems
};
