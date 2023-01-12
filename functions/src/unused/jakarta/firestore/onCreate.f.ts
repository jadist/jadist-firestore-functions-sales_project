import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

module.exports = functions
  .region("asia-southeast2")
  .https.onRequest((request, response) => {
    admin
      .firestore()
      .collection("DELETE-ME-Collection")
      .doc("DELETE-ME-Document")
      .create({ name: "value" })
      .then(() => {
        functions.logger.info(
          "Try to write to firestore from functions - by EAP",
          { structuredData: true }
        );
        response.send("Try to write to firestore from functions - by EAP");
      });
  });
