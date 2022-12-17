import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";

const field: FirstLevelDocumentModel = {
  TransactionNoInitial: "OP",
  _DocumentIdentifier: "$ONLINE_PAYMENT",
  _DocumentType: {
    reference: "DEV/DocumentType/Records/TRANSACTION",
  },
};

export default field;
