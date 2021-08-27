import { firestore } from "@lib/firebase";

const transformData = (data, callback) => {
  if (callback) {
    return data.map((item) => callback(item));
  }
  return data;
};

const extractDataFromQuery = async (items, transformFunction) => {
  const extractedData = items.docs.map((item) => item.data());
  return transformData(extractedData, transformFunction);
};

export class FirestoreCollection {
  // TO DO: RESEARCH HOW CAN I EXTEND THIS FOR NESTED COLLECTIONS/PARAMS?
  // TO DO: RESEARCH HOW CAN I "PROTECT" THESE METHODS
  constructor(collection) {
    this.collectionRef = firestore.collection(collection);
    Object.freeze(this);
  }

  async __getCollection__({ extract = false, transformFunction }) {
    const items = await this.__getCollectionRef__().get();
    if (extract) {
      return extractDataFromQuery(items, transformFunction);
    }
    return items;
  }

  async __queryCollection__(
    query = [],
    { extract } = { extract: false },
    transformFunction
  ) {
    const items = await this.__getCollectionRef__()
      .where(...query)
      .get();

    if (extract) {
      return extractDataFromQuery(items, transformFunction);
    }
    return items;
  }

  async __getDocument__(documentId) {
    return this.__getDocumentRef__(documentId).get();
  }

  async __updateDocument__(documentId, payload) {
    return this.__getDocumentRef__(documentId).update(payload);
  }

  async __deleteDocument__(documentId) {
    return this.__getDocumentRef__(documentId).delete();
  }

  async __createDocumentWithId__(id, payload) {
    return this.__getDocumentRef__(id).set(payload);
  }

  async __createDocument__(payload) {
    return this.__getDocumentRef__().set(payload);
  }

  async __documentExists__(documentId) {
    return this.__getDocumentRef__(documentId).exists;
  }

  __getCollectionRef__() {
    return this.collectionRef;
  }

  __getDocumentRef__(documentId) {
    return this.__getCollectionRef__().doc(documentId);
  }
}
