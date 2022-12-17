import * as functions from "firebase-functions";

import { getFirestore } from "firebase-admin/firestore";

module.exports = functions.https.onRequest(async (request, response) => {
  const db = getFirestore();

  const docRef = db.collection("users").doc("alovelace");

  await docRef.set({
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });

  functions.logger.info("Hello logs! - by EAP", { structuredData: true });
  response.send("Executing firestore... Again...!");
});
