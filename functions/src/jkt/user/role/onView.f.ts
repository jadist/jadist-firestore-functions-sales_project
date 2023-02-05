import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as ur from "./userRole.model";

module.exports = functions
  .region("asia-southeast2")
  .https.onRequest(async (request, response) => {
    const docs = admin.firestore().collection(ur.UserRoleCollectionName);
    const snapshot = await docs.get();

    snapshot.forEach((doc) => {
      const docData = <ur.UserRoleDocumentModel>doc.data();

      console.log(doc.id, " => ", docData.UniqueCode);
    });

    response.send(snapshot.docs);
  });
