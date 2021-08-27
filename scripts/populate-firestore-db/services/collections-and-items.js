const { firestore } = require("../firebase");
const faker = require("faker");

const {
  GENERATE_COLLECTIONS_AND_ITEMS,
} = require("../data/collections-and-items");
const { spinner } = require("../utils");

const COLLECTIONS_REF = firestore.collection("collections");
const COLLECTION_ITEMS_REF = firestore.collection("collection-items");

exports.createCollectionAndItems = async () => {
  try {
    spinner.start();
    const batch = firestore.batch();
    GENERATE_COLLECTIONS_AND_ITEMS().forEach(
      ({ id: COLLECTION_ID, items, ...collectionData }) => {
        const COLLECTION_REF = COLLECTIONS_REF.doc(COLLECTION_ID);
        batch.set(COLLECTION_REF, {
          ...collectionData,
          id: COLLECTION_ID,
        });

        items.forEach((item) => {
          const ITEM_ID = faker.datatype.uuid();
          const COLLECTION_ITEM_REF = COLLECTION_ITEMS_REF.doc(ITEM_ID);
          batch.set(COLLECTION_ITEM_REF, {
            ...item,
            id: ITEM_ID,
            collectionId: COLLECTION_ID,
          });
        });
      }
    );

    await batch.commit();
    spinner.stop();
    console.log("\nCOLLECTIONS AND ITEMS CREATED");
  } catch (error) {
    console.error("Error during Collection And Items creation:", error);
  }
};
