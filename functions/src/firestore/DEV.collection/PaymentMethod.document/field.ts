import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/FirstLevelDocument/DocumentTypeEnum";
import { DocumentIdentifierEnum } from "../../text/FirstLevelDocument/DocumentIdentifierEnum";

const field: FirstLevelDocumentModel = {
  _DocumentIdentifier: DocumentIdentifierEnum.PaymentMethod,
  _DocumentType: {
    reference: DocumentTypeEnum.SYSTEM_MASTER,
  },
};

export default field;
