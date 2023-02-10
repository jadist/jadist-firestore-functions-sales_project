import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as ul from "./userList.model";

import * as validation from "../../../helper/auth/firebase-validation";

import * as corsModule from "cors";
const cors = corsModule({ origin: true });

/**
 * Inital call of the module will create Super Admin User
 * @name OnUserListCreate
 */
module.exports = functions
  .region("asia-southeast2")
  .https.onRequest(async (request, response) => {
    cors(request, response, async () => {
      const jwt = String(request.headers.authorization?.split("Bearer ")[1]);

      const result = await validation.validate(jwt);

      if (!result.IsTrue) {
        response
          .status(401)
          .contentType("application/json")
          .send(JSON.stringify(result));
      }

      ul.UserRoleSystemData[ul.UserListCollectionName].forEach((item) => {
        Object.keys(item).forEach((itemKey) => {
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

      response.send("Module has been called!");
    });
  });
