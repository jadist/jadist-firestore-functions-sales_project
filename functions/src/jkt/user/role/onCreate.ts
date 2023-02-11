import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as ur from "./userRole.model";

/**
 * @name OnUserRoleCreate
 */
export default function () {
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
}
