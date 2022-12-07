import * as functions from "firebase-functions";

module.exports = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs! - by EAP", { structuredData: true });
  response.send("Hooraaay..... yeeeeeaaaay");
});
