import * as functions from "firebase-functions";

exports = module.exports = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs! - by EAP", { structuredData: true });
  response.send("Hello from Firebase! - by EAP... yeeeeeaaaay");
});
