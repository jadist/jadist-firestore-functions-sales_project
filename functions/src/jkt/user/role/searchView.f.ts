import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as ur from "./userRole.model";

module.exports = functions
  .region("asia-southeast2")
  .https.onRequest(async (request, response) => {
    const filterString = String(request.query["search"]).toLowerCase();

    const docs = admin.firestore().collection(ur.UserRoleCollectionName);
    const snapshot = await docs.get();

    const arrData: Array<{
      Id: string;
      Data: ur.UserRoleDocumentModel;
    }> = [];

    snapshot.forEach((doc) => {
      const docData = <ur.UserRoleDocumentModel>doc.data();

      arrData.push({
        Id: doc.id,
        Data: docData,
      });
    });

    const filteredData = arrData.filter((item) => {
      const docKeys = Object.entries(item.Data);
      const docValue = docKeys.map((docItem) => docItem[1]);

      const filterExist = docValue.filter((docItem) =>
        String(docItem).toLowerCase().includes(filterString)
      );

      return filterExist.length > 0;
    });

    response.send(filteredData);
  });
