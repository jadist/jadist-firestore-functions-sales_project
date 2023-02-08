import * as functions from "firebase-functions";
import * as validation from "../../../helper/auth/firebase-validation";

module.exports = functions
  .region("asia-southeast2")
  .https.onRequest(async (request, response) => {
    const jwt = String(request.headers.authorization?.split("Bearer ")[1]);

    const result = await validation.validate(jwt);

    if (!result.IsTrue) {
      response
        .status(401)
        .contentType("application/json")
        .send(JSON.stringify(result));
    }
  });
