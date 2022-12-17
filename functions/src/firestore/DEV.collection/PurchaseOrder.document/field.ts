import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/DocumentType.enum";

const field: FirstLevelDocumentModel = {
  TransactionNoInitial: "PO",
  _DocumentIdentifier: "$PURCHASE_ORDER",
  _DocumentType: {
    reference: DocumentTypeEnum.TRANSACTION,
  },
};

export default field;
