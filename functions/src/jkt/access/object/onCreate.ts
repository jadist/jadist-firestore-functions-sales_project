import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as ao from "./model";

/**
 * Inital call of the module will create Super Admin User
 * @name OnAccessObjectCreate
 */
export default function () {
  ao.AccessObjectSystemData[ao.AccessObjectCollectionName].forEach((item) => {
    Object.keys(item).forEach((itemKey) => {
      admin
        .firestore()
        .collection(ao.AccessObjectCollectionName)
        .doc(itemKey)
        .set(item[itemKey])
        .then()
        .catch((err) => {
          functions.logger.error(err);
        });
    });
  });
}
