import * as functions from "firebase-functions";
import * as validation from "../../../helper/auth/firebase-validation";
import * as corsModule from "cors";

const cors = corsModule({ origin: true });

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

      response
        .contentType("application/json")
        .send(JSON.stringify({ message: "OKE" }));
    });
  });
