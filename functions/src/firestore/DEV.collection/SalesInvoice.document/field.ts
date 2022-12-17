import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/DocumentType.enum";

const field: FirstLevelDocumentModel = {
  TransactionNoInitial: "SI",
  _DocumentIdentifier: "$SALES_INVOICE",
  _DocumentType: {
    reference: DocumentTypeEnum.TRANSACTION,
  },
};

export default field;
