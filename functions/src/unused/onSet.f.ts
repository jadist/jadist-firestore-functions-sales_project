import * as functions from "firebase-functions";

import { getFirestore } from "firebase-admin/firestore";

module.exports = functions.https.onRequest(async (request, response) => {
  const db = getFirestore();

  const citiesRef = db.collection("cities");

  await citiesRef.doc("SF").set({
    name: "San Francisco",
    state: "CA",
    country: "USA",
    capital: false,
    population: 860000,
  });

  functions.logger.info("Hello logs! - by EAP", { structuredData: true });
  response.send("Executing firestore...");
});
