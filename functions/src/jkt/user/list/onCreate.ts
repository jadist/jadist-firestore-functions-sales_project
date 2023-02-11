import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as ul from "./userList.model";

/**
 * Inital call of the module will create Super Admin User
 * @name OnUserListCreate
 */
export default function () {
  ul.UserRoleSystemData[ul.UserListCollectionName].forEach((item) => {
    Object.keys(item).forEach((itemKey) => {
      console.log("HEE?", item[itemKey]);

      admin
        .firestore()
        .collection(ul.UserListCollectionName)
        .doc(itemKey)
        .set(item[itemKey])
        .then()
        .catch((err) => {
          functions.logger.error(err);
        });
    });
  });
}
