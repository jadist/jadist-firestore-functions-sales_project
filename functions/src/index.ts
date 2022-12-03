// import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs! - by EAP", { structuredData: true });
//   response.send("Hello from Firebase! - by EAP");
// });

import { onView } from "./temp/onView";

export const helloWorld = onView;
