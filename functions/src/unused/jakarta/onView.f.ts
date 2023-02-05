import * as functions from "firebase-functions";

module.exports = functions
  .region("asia-southeast2")
  .https.onRequest((request, response) => {
    functions.logger.info("Hello logs! - by EAP", { structuredData: true });
    response.send("Hello world from jakarta By EAP!");
  });
