import { firestore } from "@lib/firebase";

const COLLECTION_REF = firestore.collection("collections");

const getCollection = async (collectionId) =>
  COLLECTION_REF.doc(collectionId).get();

const getCollections = async () => COLLECTION_REF.get();

export default {
  getCollection,
  getCollections,
};
