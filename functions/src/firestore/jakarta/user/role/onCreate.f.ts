import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as ur from "./userRole.model";

/**
 * @name OnUserRoleCreate
 */
module.exports = functions
  .region("asia-southeast2")
  .https.onRequest((request, response) => {
    ur.UserRoleSystemData[ur.UserRoleCollectionName].forEach((item) => {
      Object.keys(item).forEach((itemKey) => {
        admin
          .firestore()
          .collection(ur.UserRoleCollectionName)
          .doc(itemKey)
          .set(item[itemKey])
          .then()
          .catch((err) => {
            functions.logger.error(err);
          });
      });
    });

    response.send("Module has been called!");
  });
