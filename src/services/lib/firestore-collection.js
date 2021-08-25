import { firestore } from "@lib/firebase";

export class FirestoreCollection {
  constructor(collection) {
    this.collectionRef = firestore.collection(collection);
    Object.freeze(this);
  }

  async getCollection() {
    return this.collectionRef.get();
  }

  async getDocument(documentId) {
    return this.getDocumentRef(documentId);
  }

  async updateDocument(documentId, payload) {
    return this.getDocumentRef(documentId).update(payload);
  }

  async deleteDocument(documentId) {
    return this.getDocumentRef(documentId).delete();
  }

  async createDocumentWithId(id, payload) {
    return this.getDocumentRef(id).set(payload);
  }

  async createDocument(payload) {
    return this.getDocumentRef().set(payload);
  }

  async documentExists(documentId) {
    console.log(this.getDocumentRef(documentId));
    console.log(this.getDocumentRef(documentId).exist);
    return this.getDocumentRef(documentId).exists;
  }

  getCollectionRef() {
    return this.collectionRef;
  }

  getDocumentRef(documentId) {
    return this.getCollectionRef().doc(documentId);
  }
}
