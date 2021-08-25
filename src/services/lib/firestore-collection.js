import { firestore } from "@lib/firebase";

export class FirestoreCollection {
  // TO DO: RESEARCH HOW CAN I EXTEND THIS FOR NESTED COLLECTIONS/PARAMS?
  // TO DO: RESEARCH HOW CAN I "PROTECT" THESE METHODS
  constructor(collection) {
    this.collectionRef = firestore.collection(collection);
    Object.freeze(this);
  }

  async __getCollection__() {
    return this.collectionRef.__get__();
  }

  async __getDocument__(documentId) {
    return this.__getDocumentRef__(documentId);
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
    console.log(this.__getDocumentRef__(documentId));
    console.log(this.__getDocumentRef__(documentId).exist);
    return this.__getDocumentRef__(documentId).exists;
  }

  __getCollectionRef__() {
    return this.collectionRef;
  }

  __getDocumentRef__(documentId) {
    return this.__getCollectionRef__().doc(documentId);
  }
}
