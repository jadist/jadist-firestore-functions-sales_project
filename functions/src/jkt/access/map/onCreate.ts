import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as model from "./model";

/**
 * Inital call of the module will create Super Admin User
 * @name RoleAccessMapOnCreate
 */
export default function () {
  model.RoleAccessMapSystemData[model.RoleAccessMapCollectionName].forEach(
    (item) => {
      Object.keys(item).forEach((itemKey) => {
        admin
          .firestore()
          .collection(model.RoleAccessMapCollectionName)
          .doc(itemKey)
          .set(item[itemKey])
          .then()
          .catch((err) => {
            functions.logger.error(err);
          });
      });
    }
  );
}
