import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

module.exports = functions
  .region("asia-southeast2")
  .https.onRequest(async (request, response) => {
    const tokenId = String(request.headers.authorization?.split("Bearer ")[1]);

    admin
      .auth()
      .verifyIdToken(tokenId)
      .then((decoded) => {
        return response.status(200).send(decoded);
      })
      .catch((err) => {
        return response.status(401).send(err);
      });

    // response.send("Hello from restricted resources. token: " + tokenId);
  });
