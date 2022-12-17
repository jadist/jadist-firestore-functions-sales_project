import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/DocumentType.enum";

const field: FirstLevelDocumentModel = {
  TransactionNoInitial: "RN",
  _DocumentIdentifier: "$RECEIVED_NOTES",
  _DocumentType: {
    reference: DocumentTypeEnum.TRANSACTION,
  },
};

export default field;
