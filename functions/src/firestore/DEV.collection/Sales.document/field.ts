import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/FirstLevelDocument/DocumentTypeEnum";
import { TransactionNoInitialEnum } from "../../text/FirstLevelDocument/TransactionNoInitialEnum";
import { DocumentIdentifierEnum } from "../../text/FirstLevelDocument/DocumentIdentifierEnum";

const field: FirstLevelDocumentModel = {
  TransactionNoInitial: TransactionNoInitialEnum.Sales,
  _DocumentIdentifier: DocumentIdentifierEnum.Sales,
  _DocumentType: {
    reference: DocumentTypeEnum.TRANSACTION_CHAIN,
  },
};

export default field;