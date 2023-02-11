import * as functions from "firebase-functions";
import * as corsModule from "cors";
const cors = corsModule({ origin: true });

import * as validation from "../../helper/auth/firebase-validation";

import userRoleCreate from "../user/role/onCreate";
import userListCreate from "../user/list/onCreate";
import accessObjectCreate from "../access/object/onCreate";

/**
 * Function to generate Master Data
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

      // Create User Role
      userRoleCreate();

      // Create Initial User List
      userListCreate();

      // Access Object
      accessObjectCreate();

      response.contentType("application/json").send(
        JSON.stringify({
          message: "Module has been called successfully",
        })
      );
    });
  });
