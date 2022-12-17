import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/FirstLevelDocument/DocumentTypeEnum";
import { TransactionNoInitialEnum } from "../../text/FirstLevelDocument/TransactionNoInitialEnum";
import { DocumentIdentifierEnum } from "../../text/FirstLevelDocument/DocumentIdentifierEnum";

const field: FirstLevelDocumentModel = {
  TransactionNoInitial: TransactionNoInitialEnum.DeliveryOrder,
  _DocumentIdentifier: DocumentIdentifierEnum.DeliveryOrder,
  _DocumentType: {
    reference: DocumentTypeEnum.TRANSACTION,
  },
};

export default field;
