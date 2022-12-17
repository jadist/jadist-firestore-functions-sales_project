import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/DocumentType.enum";

const field: FirstLevelDocumentModel = {
  TransactionNoInitial: "CC",
  _DocumentIdentifier: "$CASH_COLLECTIONS",
  _DocumentType: {
    reference: DocumentTypeEnum.TRANSACTION,
  },
};

export default field;
